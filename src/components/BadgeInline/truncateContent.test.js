import '@testing-library/jest-dom';

import truncateContent from './truncateContent';

describe('code snippet', () => {
  it('should truncate string content to specified length', () => {
    const result = truncateContent('John Dorian', 4);
    expect(result).toBe('John');
  });

  it('should truncate number content to specified length', () => {
    const result = truncateContent(13756, 4);
    expect(result).toBe('9999+');
  });

  it('should handle empty string content correctly', () => {
    const result = truncateContent('', 4);
    expect(result).toBe('');
  });

  it('should handle string of a length less then specified in `length` argument', () => {
    const result = truncateContent('abc', 4);
    expect(result).toBe('abc');
  });

  it('should truncate negative number like a string of rounded number', () => {
    const result = truncateContent(-13756, 4);
    expect(result).toBe('-137');
  });

  it('should truncate negative float number like a string of rounded float', () => {
    const result = truncateContent(-123.61, 4);
    expect(result).toBe('-124');
  });

  it('should throw an error if content is not a number or a string', () => {
    const content = { name: 'John Dorian' };
    expect(() => truncateContent(content, 4)).toThrow(
      'Content has to be a string or a number'
    );
  });

  it('should throw an error if length is not a number', () => {
    const content = 'John T Dorian';
    expect(() => truncateContent(content, '4')).toThrow(
      "Content's max length value has to be a number"
    );
  });

  it('should truncate float number content to specified length', () => {
    const result = truncateContent(13756.789, 4);
    expect(result).toBe('9999+');
  });

  it('should truncate number content to integer part length', () => {
    const result = truncateContent(123.656, 3);
    expect(result).toBe('124');
  });
});
