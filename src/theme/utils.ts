import adjustHsl from './spectrum/methods/adjustHsl';
import { blackAndWhite, colorTokens, defaultColors } from './tokens/color';
import { COLOR_NAMES } from '../lib/constants';
import createPalette from './spectrum/methods/createPalette';
import {
  ColorName,
  ColorToken,
  DefaultColor,
  NormalizedColor,
  Palette,
  Theme,
  ThemeColor,
  ThemeMainColors
} from './theme.types';
import deepMerge from '../services/deepMerge';
import elevation from './tokens/elevation';
import gap from './tokens/gap';
import getSplitComplementary from './spectrum/methods/getSplitComplementary';
import radius from './tokens/radius';
import Spectrum from './spectrum/spectrum';
import state from './tokens/state';

/**
 * Darkens the given color by decreasing its saturation value.
 * Uses `adjustHsl` function from `spectrum`
 *
 * @param {Spectrum} color - The color object to be darkened
 * @param {string} level ['-10%'] - The saturation change to apply to the color
 * @returns {Spectrum} A new color object with a modified saturation value
 *
 * @example
 * const color = new Spectrum('hsl', [180, 0.75, 0.5]);
 * const darkenedColor = darken(color);
 * console.log(darkenedColor.hsl); // { h: 180, s: 0.65, l: 0.5, a: 1 }
 */
export function darken(color: Spectrum, level: string = '-10%'): Spectrum {
  return adjustHsl(color, { saturation: level });
}

/**
 * Converts the color values in the provided `colors` object to the appropriate format.
 * Creates a new object with the converted colors and returns it.
 *
 * @param colors - An object containing color values for light and dark modes.
 * The color values can be either strings representing hex colors or instances of the `Spectrum` class.
 * @returns An object containing the converted color values for light and dark modes.
 * The color values are represented as objects with properties for red, green, blue, and alpha values.
 */
function convertUserColors(colors: ThemeMainColors | Required<Theme['color']>) {
  const modes: Array<keyof ThemeMainColors> = ['light', 'dark'];
  const convertedColors: Partial<ThemeColor> | NormalizedColor = {
    light: {},
    dark: {}
  };

  // Check whether input was a string (and convert) or a Spectrum instanse
  for (const mode of modes) {
    const modeColors = colors?.[mode];
    if (modeColors) {
      const spectrumValuePairs = Object.entries(modeColors).map(
        ([key, value]) => {
          const spectrumValue =
            value instanceof Spectrum ? value : new Spectrum('hex', value);

          return [key, spectrumValue];
        }
      );

      convertedColors[mode] = Object.fromEntries(spectrumValuePairs);
    }
  }

  if (convertedColors.light?.primary) {
    const complementary = getSplitComplementary(convertedColors.light?.primary);

    if (!convertedColors.light.secondary) {
      convertedColors.light.secondary = complementary.secondary;
    }

    if (!convertedColors.light.tertiary) {
      convertedColors.light.tertiary = complementary.tertiary;
    }
  }

  // Create dark mode color values from the ones provided by the user
  if (convertedColors.light) {
    Object.entries(convertedColors.light).forEach(([key, value]) => {
      if (!convertedColors.dark?.[key as keyof typeof convertedColors.light]) {
        convertedColors.dark = {
          ...convertedColors.dark,
          [key]: darken(value)
        };
      }
    });
  }

  return convertedColors;
}

/**
 * Generates a palette of colors for both light and dark modes
 * based on the provided colors
 *
 * @param {DefaultColor} defaultColors - An object that contains
 * the default colors for both light and dark modes
 * @returns {Palette} The generated palette object
 */
function generatePalette(defaultColors: DefaultColor): Palette {
  const palette: Palette = {
    light: {},
    dark: {}
  };

  for (const mode of Object.keys(palette) as (keyof Palette)[]) {
    for (const [key, value] of Object.entries(defaultColors[mode])) {
      palette[mode][key as ColorName] = createPalette(value);
    }
  }

  return palette;
}

/**
 * Generates theme colors based on the provided palette and default colors
 *
 * @param palette - An object containing generated color palettes
 * for both dark and light modes
 * @param defaultColors - An object containing default main colors
 * for both dark and light modes
 * @returns {ThemeColor} An object containing all theme colors for both light and dark modes
 */
function createThemeColors(
  palette: Palette,
  defaultColors: DefaultColor
): ThemeColor {
  const themeColors: ThemeColor = {
    light: {},
    dark: {}
  };

  for (const color of COLOR_NAMES) {
    for (const [token, modeValue] of Object.entries(colorTokens)) {
      const themeToken = token.replace('color', color) as ColorToken;

      // Iterate over each mode inside a token
      for (const mode of Object.keys(modeValue) as (keyof ThemeColor)[]) {
        const colorPalette = palette[mode][color];
        if (colorPalette) {
          themeColors[mode][themeToken] = colorPalette[modeValue[mode]];
        }

        // Add initial main color with `-base` postfix
        if (!defaultColors[mode][color]) {
          throw new Error(`'${color}' color for '${mode}' was not defined`);
        }
        themeColors[mode][`${color}-base`] = defaultColors[mode][color];
      }
    }
  }

  return themeColors;
}
/**
 * Generates a color part of the theme
 *
 * @param {ThemeMainColors} customColors -  An object containing color values
 * for light and dark modes
 * @returns {Required<Theme['color']>} An object containing the light and dark theme colors
 */
function generateColorTheme(
  customColors?: ThemeMainColors
): Required<Theme['color']> {
  const normalizedColors = convertUserColors(customColors);
  const baseColors: DefaultColor = {
    light: { ...defaultColors?.light, ...normalizedColors?.light },
    dark: { ...defaultColors?.dark, ...normalizedColors?.dark }
  };
  const palette = generatePalette(baseColors);
  const colorTokens = createThemeColors(palette, baseColors);

  const colors: Required<Theme['color']> = {
    light: {
      background: palette.light.primary?.['99'],
      'background-container-lowest': palette.light.neutral?.['100'],
      'background-container-low': palette.light.neutral?.['97'],
      'background-container': palette.light.neutral?.['95'],
      'background-container-high': palette.light.neutral?.['92'],
      'background-container-highest': palette.light.neutral?.['90'],
      'background-variant': palette.light.neutral?.['90'],
      'on-background': palette.light.neutral?.['10'],
      'on-background-variant': palette.light.neutral?.['30'],
      'on-background-low': palette.light.neutral?.['40'],
      outline: palette.light.neutral?.['50'],
      'outline-variant': palette.light.neutral?.['80'],
      'outline-focus': palette.light.tertiary?.['50'],
      ...colorTokens.light,
      ...blackAndWhite
    },
    dark: {
      background: palette.dark.primary?.['5'],
      'background-container-lowest': palette.dark.neutral?.['5'],
      'background-container-low': palette.dark.neutral?.['10'],
      'background-container': palette.dark.neutral?.['12'],
      'background-container-high': palette.dark.neutral?.['15'],
      'background-container-highest': palette.dark.neutral?.['20'],
      'background-variant': palette.dark.neutral?.['30'],
      'on-background': palette.dark.neutral?.['90'],
      'on-background-variant': palette.dark.neutral?.['80'],
      'on-background-low': palette.dark.neutral?.['70'],
      outline: palette.dark.neutral?.['60'],
      'outline-variant': palette.dark.neutral?.['30'],
      'outline-focus': palette.dark.tertiary?.['70'],
      ...colorTokens.dark,
      ...blackAndWhite
    }
  };

  return colors;
}

/**
 * Generates a theme object based on custom colors provided as an input
 *
 * @param customColors - An object that specifies custom colors for the theme
 * @returns The generated theme object
 */
export function getTheme(customColors?: ThemeMainColors) {
  const color = generateColorTheme(customColors);
  const theme = { elevation, color, gap, radius, state };

  return theme;
}

/**
 * Merges a generated base theme with a custom theme
 *
 * @param {ReturnType<typeof getTheme>} baseTheme - The default theme
 * generated by the `getTheme` function
 * @param {Theme} customTheme - An optional custom theme object
 * that can contain color, elevation, gap, radius, and state properties.
 * @returns The deep merged theme object
 * that combines the base theme and the custom theme.
 */
export function mergeThemes(
  baseTheme: ReturnType<typeof getTheme>,
  customTheme?: Theme
) {
  const normalizedTheme = customTheme?.color
    ? { ...customTheme, color: { ...convertUserColors(customTheme?.color) } }
    : customTheme;

  const theme = normalizedTheme
    ? deepMerge(baseTheme, normalizedTheme)
    : baseTheme;

  return theme;
}

/**
 * Generates CSS variable declarations based on the values of the theme object.
 *
 * @param {Theme} theme - The theme object
 * @returns An object containing CSS variable declarations
 * for three style blocks: `common`, `light` and `dark`
 */
export function getCssVars(theme: Theme) {
  const commonKeys = ['gap', 'radius', 'state'];
  const cssVars = {
    common: '',
    light: '',
    dark: ''
  };

  for (const [key, value] of Object.entries(theme)) {
    if (commonKeys.includes(key)) {
      for (const [propKey, propValue] of Object.entries(value)) {
        cssVars.common += `  --pui-${key}-${propKey}: ${propValue};\n`;
      }
    } else {
      for (const [modeKey, modeValues] of Object.entries(value)) {
        if (!modeValues || typeof modeValues !== 'object') break;
        const mode = modeKey as Exclude<keyof typeof cssVars, 'common'>;

        for (const [propKey, propValue] of Object.entries(modeValues)) {
          switch (key) {
            case 'elevation':
              cssVars[mode] += `  --pui-${key}-${propKey}: ${propValue};\n`;
              break;

            case 'color': {
              const { r, g, b } = propValue.rgb;
              cssVars[mode] += `  --pui-${propKey}: ${propValue.hex};\n`;
              cssVars[mode] += `  --pui-${propKey}-channels: ${r} ${g} ${b};\n`;
              break;
            }
          }
        }
      }
    }
  }

  return cssVars;
}
