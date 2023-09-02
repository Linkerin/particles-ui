import { forwardRef } from 'react';
import classNames from 'classnames';

import { createGlyphContent } from './glyphs';
import { KbdProps } from './Kbd.types';
import Text from '../Text/Text';

import styles from './Kbd.module.scss';

export type { KbdProps };

/**
 * Keyboard key component (`Kbd`) displays a key or a combination of keys
 * @see {@link https://particles.snipshot.dev/docs/components/kbd | Particles UI | Kbd}
 */
const Kbd = forwardRef<HTMLElement, KbdProps>(function Kbd(
  { children, className, glyph, type = 'flat', ...props },
  ref
) {
  const glyphsContent = createGlyphContent(glyph);

  return (
    <Text
      ref={ref}
      as="kbd"
      className={classNames(styles.kbd, styles[type], className)}
      color={type === 'flat' ? 'on-background-low' : 'on-background-variant'}
      {...props}
    >
      {glyphsContent?.length && glyphsContent?.length > 0 && (
        <kbd data-pui-component="kbd-glyphs">{glyphsContent}</kbd>
      )}
      {children}
    </Text>
  );
});

export default Kbd;
