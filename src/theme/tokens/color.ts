import darken from '../utils/darken';
import { DefaultColor } from '../theme.types';
import getSplitComplementary from '../spectrum/methods/getSplitComplementary';
import setHsl from '../spectrum/methods/setHsl';
import Spectrum from '../spectrum/spectrum';

export const colorTokens = {
  color: { light: '50', dark: '70' },
  'color-darker': { light: '40', dark: '60' },
  'color-container': { light: '90', dark: '35' },
  'color-container-low': { light: '95', dark: '25' },
  'on-color': { light: '99', dark: '15' },
  'on-color-container': { light: '25', dark: '90' }
};

export const defaultColors: DefaultColor = {
  light: {
    primary: new Spectrum('hsl', '233, 40%, 55%'),
    error: new Spectrum('hsl', '356, 70%, 60%'),
    success: new Spectrum('hsl', '149, 40%, 50%'),
    warning: new Spectrum('hsl', '36, 98%, 60%'),
    info: new Spectrum('hsl', '212, 78%, 60%'),
    get secondary() {
      return getSplitComplementary(this.primary).secondary;
    },
    get tertiary() {
      return getSplitComplementary(this.primary).tertiary;
    },
    get neutral() {
      return setHsl(this.primary, { saturation: '14%' });
    }
  },
  get dark() {
    const darkColors = [];
    for (const [key, value] of Object.entries(this.light)) {
      darkColors.push([key, darken(value)]);
    }

    return Object.fromEntries(darkColors);
  }
};

export const blackAndWhite = {
  black: new Spectrum('hex', '#000'),
  white: new Spectrum('hex', '#fff')
};
