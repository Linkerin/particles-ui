/**
 * Merges two objects together into a new object, filtering out properties
 * with a value of `undefined`
 *
 * @param {object} target - The target object to merge the `injection` object into
 * @param {object} injection - The object to be merged into the `target` object
 * @returns The merged object
 * @throws {Error} - If either `target` or `injection` is not an object.
 */
function shallowMerge(target: object, injection: object) {
  if (typeof target !== 'object' || typeof injection !== 'object') {
    throw new Error('Both target and injection arguments must be objects');
  }

  const injectionWoUndefined = Object.fromEntries(
    Object.entries(injection).filter(entry => entry.at(1) !== undefined)
  );

  return { ...target, ...injectionWoUndefined };
}

export default shallowMerge;
