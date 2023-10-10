import { forwardRef } from 'react';
import classNames from 'classnames';

import { createGlyphContent } from './glyphs';
import { KbdProps } from './Kbd.types';
import { Text } from '../Text/Text';

import styles from './Kbd.module.scss';

export type { KbdProps };

/**
 * Keyboard key component (`Kbd`) displays a key or a combination of keys
 *
 * @see {@link https://particles.snipshot.dev/docs/components/kbd | Particles UI | Kbd}
 */
export const Kbd = forwardRef<HTMLElement, KbdProps>(function Kbd(
  { children, className, glyph, rightGlyph, type = 'flat', ...props },
  ref
) {
  const glyphsContent = createGlyphContent(glyph);
  const rightGlyphsContent = createGlyphContent(rightGlyph);

  return (
    <Text
      ref={ref}
      as="kbd"
      className={classNames(styles.kbd, styles[type], className)}
      color="on-background-variant"
      {...props}
    >
      {glyphsContent?.length && glyphsContent?.length > 0 && (
        <kbd data-pui-component="kbd-glyphs">{glyphsContent}</kbd>
      )}
      {children}
      {rightGlyphsContent?.length && rightGlyphsContent?.length > 0 && (
        <kbd data-pui-component="kbd-glyphs">{rightGlyphsContent}</kbd>
      )}
    </Text>
  );
});
