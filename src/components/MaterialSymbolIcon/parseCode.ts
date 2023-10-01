/**
 * Parses icon's numeric character reference (codepoint)
 * into hexadecimal string value for HTML representation
 *
 * @param icon Code point value
 *
 * @returns Hexadicemal representation
 *
 * @example
 * parseCode('e86f');
 *
 * @see {@link https://developers.google.com/fonts/docs/material_symbols#using_the_icons_in_html | Material Symbols guide}
 */
function parseCode(icon?: string): string | null {
  if (!icon || typeof icon !== 'string') return null;

  if (icon.length < 4 || icon.length > 6) return null;

  const parsed = Number.parseInt(icon, 16);
  if (Number.isNaN(parsed)) return null;

  return String.fromCharCode(parsed);
}

export default parseCode;
