/**
 * Glyphs for `Kbd` component
 */
const glyphs = Object.freeze({
  apple: '',
  command: '⌘',
  control: '⌃',
  option: '⌥',
  shift: '⇧',
  capsLock: '⇪',
  eject: '⏏',
  enter: '⌤',
  return: '↵',
  backspace: '⌫',
  forwardDelete: '⌦',
  escape: '⎋',
  right: '→',
  left: '←',
  up: '↑',
  down: '↓',
  pageUp: '⇞',
  pagedown: '⇟',
  home: '↖',
  end: '↘',
  tab: '⇥',
  tabLeft: '⇤',
  space: '␣',
  fn: '🌐'
});

/**
 * Possible names for keyboard glyphs
 */
export type GlyphsKey = keyof typeof glyphs;

/**
 * Convert's `glyph` property value into a string of glyphs
 *
 * @param glyphProp `Kbd`'s component `glyph` property
 *
 * @returns `string` value that inserts as component's content
 *
 * @example
 * createGlyphContent(['command', 'option']) // '⌘⌥'
 */
export function createGlyphContent(glyphProp?: GlyphsKey | GlyphsKey[]) {
  if (typeof glyphProp === 'string' && !!glyphs[glyphProp]) {
    return glyphs[glyphProp];
  }

  if (Array.isArray(glyphProp)) {
    let glyphsContent = '';
    glyphProp.forEach(glyphName => {
      if (!glyphs[glyphName]) return;

      glyphsContent += glyphs[glyphName];
    });

    return glyphsContent;
  }
}

export default glyphs;
