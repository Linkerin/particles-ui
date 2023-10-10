import parseCode from './parseCode';

describe('parseCode', () => {
  it('should return the correct hexadecimal representation when a valid code point value is provided', () => {
    expect(parseCode('e86f')).toBe('\u{e86f}');
  });

  it('should return null when no icon is provided', () => {
    expect(parseCode()).toBeNull();
  });

  it('should return the correct character when a valid code point value is provided', () => {
    expect(parseCode('e86f')).toBe('');
  });

  it('should return the input string when it is not a valid hexadecimal value', () => {
    expect(parseCode('invalid')).toBeNull();
  });

  it('should return null when an empty string is provided', () => {
    expect(parseCode('')).toBeNull();
  });

  it('should return null when a non-string value is provided', () => {
    // @ts-expect-error
    expect(parseCode(123)).toBeNull();
  });

  it('should return null when a string with length greater than 6 is provided', () => {
    expect(parseCode('1234567')).toBeNull();
  });

  it('should return null when a string with length less than 4 is provided', () => {
    expect(parseCode('abc')).toBeNull();
  });
});
