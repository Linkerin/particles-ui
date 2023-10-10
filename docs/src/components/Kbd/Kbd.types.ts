import { GlyphsKey } from './glyphs';
import { TextProps } from '../Text/Text.types';

export interface KbdProps extends Omit<TextProps, 'as'> {
  /**
   * Styling variant
   */
  type?: 'dimensional' | 'flat';
  /**
   * A string or an array of possible keyboard glyph keys.
   * Positioned left relative to the text.
   */
  glyph?: GlyphsKey | GlyphsKey[];
  /**
   * A string or an array of possible keyboard glyph keys.
   * Positioned right relative to the text.
   */
  rightGlyph?: GlyphsKey | GlyphsKey[];
}
