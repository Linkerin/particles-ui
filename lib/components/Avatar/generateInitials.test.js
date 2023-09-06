import '@testing-library/jest-dom';

import generateInitials from './generateInitials';

describe('generateInitials', () => {
  it('should return the initials when a name is provided', () => {
    const name = 'John Doe';
    const result = generateInitials(name);
    expect(result).toBe('JD');
  });

  it('should return null when the name is an empty string', () => {
    const name = '';
    const result = generateInitials(name);
    expect(result).toBeNull();
  });

  it('should return null when the name is undefined', () => {
    const name = undefined;
    const result = generateInitials(name);
    expect(result).toBeNull();
  });

  it('should return null when the name is not a string', () => {
    const name = 123;
    const result = generateInitials(name);
    expect(result).toBeNull();
  });

  it('should return two initials when the name has more than two words', () => {
    const name = 'John Michael Doe';
    const result = generateInitials(name);
    expect(result).toBe('JM');
  });

  it('should return the initial of the first letter of the name', () => {
    const name = 'John';
    const result = generateInitials(name);
    expect(result).toBe('J');
  });

  it('should return two initials when the name has a hyphenated last name', () => {
    const name = 'John Doe-Smith';
    const result = generateInitials(name);
    expect(result).toBe('JD');
  });

  it('should return two initials when the name has a suffix', () => {
    const name = 'John Doe Jr.';
    const result = generateInitials(name);
    expect(result).toBe('JD');
  });

  it('should return two uppercase initials when the name is in lowercase', () => {
    const name = 'john doe';
    const result = generateInitials(name);
    expect(result).toBe('JD');
  });

  it('should return two initials when the name has a hyphenated last name', () => {
    const name = 'John-Doe Smith';
    const result = generateInitials(name);
    expect(result).toBe('JS');
  });
});
