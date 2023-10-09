import type Spectrum from './spectrum/spectrum';
import type { COLOR_NAMES } from '../lib/constants';
import type elevation from './tokens/elevation';
import type gap from './tokens/gap';
import type radius from './tokens/radius';
import type state from './tokens/state';

/**
 * Valid color names for theme generation
 */
export type ColorName = (typeof COLOR_NAMES)[number] | 'neutral';

type ColorValue = string | Spectrum;

type ColorRecord<T> = Record<ColorName, T>;

export interface DefaultColor {
  dark: ColorRecord<Spectrum>;
  light: ColorRecord<Spectrum>;
}

/**
 * Main colors for the `Theme` after conversion `string` values
 * into `Spectrum` instances
 */
export type NormalizedColor = {
  [P in keyof DefaultColor]?: Partial<DefaultColor[P]>;
};

/**
 * Main colors for the `Theme` component prop
 */
export interface ThemeMainColors {
  dark?: Partial<ColorRecord<ColorValue>>;
  light?: Partial<ColorRecord<ColorValue>>;
}

/**
 * Colors palette object created with `spectrum`'s `createPalette` function
 */
export interface Palette {
  dark: Partial<Record<ColorName, Record<string, Spectrum>>>;
  light: Partial<Record<ColorName, Record<string, Spectrum>>>;
}

type ThemeColorObj<T> = Partial<Record<ColorToken, T>>;

export interface ThemeColor {
  dark: ThemeColorObj<Spectrum>;
  light: ThemeColorObj<Spectrum>;
}

/**
 * Particles UI theme structure
 */
export interface Theme {
  color?: {
    dark?: ThemeColorObj<ColorValue>;
    light?: ThemeColorObj<ColorValue>;
  };
  elevation?: Partial<typeof elevation>;
  gap?: Partial<typeof gap>;
  radius?: Partial<typeof radius>;
  state?: Partial<typeof state>;
}

/**
 * Valid color tokens for the Particles UI theme object
 */
export enum ColorToken {
  'black' = 'black',
  'white' = 'white',
  'primary' = 'primary',
  'primary-base' = 'primary-base',
  'primary-darker' = 'primary-darker',
  'primary-container' = 'primary-container',
  'primary-container-low' = 'primary-container-low',
  'on-primary' = 'on-primary',
  'on-primary-container' = 'on-primary-container',
  'secondary' = 'secondary',
  'secondary-base' = 'secondary-base',
  'secondary-darker' = 'secondary-darker',
  'secondary-container' = 'secondary-container',
  'secondary-container-low' = 'secondary-container-low',
  'on-secondary' = 'on-secondary',
  'on-secondary-container' = 'on-secondary-container',
  'tertiary' = 'tertiary',
  'tertiary-base' = 'tertiary-base',
  'tertiary-darker' = 'tertiary-darker',
  'tertiary-container' = 'tertiary-container',
  'tertiary-container-low' = 'tertiary-container-low',
  'on-tertiary' = 'on-tertiary',
  'on-tertiary-container' = 'on-tertiary-container',
  'info' = 'info',
  'info-base' = 'info-base',
  'info-darker' = 'info-darker',
  'info-container' = 'info-container',
  'info-container-low' = 'info-container-low',
  'on-info' = 'on-info',
  'on-info-container' = 'on-info-container',
  'success' = 'success',
  'success-base' = 'success-base',
  'success-darker' = 'success-darker',
  'success-container' = 'success-container',
  'success-container-low' = 'success-container-low',
  'on-success' = 'on-success',
  'on-success-container' = 'on-success-container',
  'warning' = 'warning',
  'warning-base' = 'warning-base',
  'warning-darker' = 'warning-darker',
  'warning-container' = 'warning-container',
  'warning-container-low' = 'warning-container-low',
  'on-warning' = 'on-warning',
  'on-warning-container' = 'on-warning-container',
  'error' = 'error',
  'error-base' = 'error-base',
  'error-darker' = 'error-darker',
  'error-container' = 'error-container',
  'error-container-low' = 'error-container-low',
  'on-error' = 'on-error',
  'on-error-container' = 'on-error-container',
  'background' = 'background',
  'background-container-lowest' = 'background-container-lowest',
  'background-container-low' = 'background-container-low',
  'background-container' = 'background-container',
  'background-container-high' = 'background-container-high',
  'background-container-highest' = 'background-container-highest',
  'background-variant' = 'background-variant',
  'on-background' = 'on-background',
  'on-background-variant' = 'on-background-variant',
  'on-background-low' = 'on-background-low',
  'outline' = 'outline',
  'outline-variant' = 'outline-variant',
  'outline-focus' = 'outline-focus'
}
