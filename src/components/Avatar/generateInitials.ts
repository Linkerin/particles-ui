/**
 * Generates initials from person's name
 * @param name Person's name
 * @returns Initials, maximum length - 2 characters
 */
const generateInitials = (name?: string) => {
  if (!name || typeof name !== 'string') {
    return null;
  }

  const splitted = name.toUpperCase().split(' ');
  const initials = splitted.reduce((acc, currValue) => acc + currValue[0], '');

  return initials.slice(0, 2);
};

export default generateInitials;
