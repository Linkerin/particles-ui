/**
 * Truncates badge content to the given number of characters
 * @param content Badge content
 * @param length Maximum number of content characters
 * @returns For `string` content returns a truncated string of specified length.
 * For `number` content returns a maximum number of previous order
 * and `+` symbol at the end. Thus, the return value length is `length` + 1.
 *
 * @example
 * truncateBadgeContent('John Dorian', 4) // 'John'
 * truncateBadgeContent(13756, 4) // '9999+'
 */
function truncateContent(content: string | number, length: number) {
  if (typeof length !== 'number') return content;
  if (typeof content !== 'number' && typeof content !== 'string') {
    return content;
  }
  // For strings just return first `length` characters
  if (typeof content === 'string') {
    return content.slice(0, length);
  }

  const fixedNum = content.toFixed(0);
  if (fixedNum.length <= length) return fixedNum;

  /**
   * Maximum number of previous order
   * @example
   * If content = 153 and length = 2, then we should return 99 (10^2-1)
   */
  const maxNumOfPrevOrder = Math.pow(10, length) - 1;

  return `${maxNumOfPrevOrder}+`;
}

export default truncateContent;
