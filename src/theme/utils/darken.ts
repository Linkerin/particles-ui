import adjustHsl from '../spectrum/methods/adjustHsl';
import type Spectrum from '../spectrum/spectrum';

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
function darken(color: Spectrum, level: string = '-10%'): Spectrum {
  return adjustHsl(color, { saturation: level });
}

export default darken;
