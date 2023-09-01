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
function parseCode(icon?: string) {
  if (!icon) return null;

  const parsed = Number.parseInt(icon, 16);
  if (Number.isNaN(parsed)) {
    return icon;
  }
  return String.fromCharCode(parsed);
}

export default parseCode;
