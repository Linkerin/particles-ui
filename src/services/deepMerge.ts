/**
 * Checks if a given element is an object.
 *
 * @param {unknown} element - The element to be checked.
 * @returns {boolean} `true` if the `element` is an object, `false` otherwise.
 *
 * @example
 * const element1 = { name: 'John', age: 25 };
 * const element2 = [1, 2, 3];
 *
 * console.log(isObject(element1)); // true
 * console.log(isObject(element2)); // false
 */
function isObject(element: unknown): boolean {
  return (
    typeof element === 'object' && element !== null && !Array.isArray(element)
  );
}

/**
 *  Recursively merges two nested objects
 *
 * @template T - The type of the objects being merged.
 * @param {T} target - The target object to merge into.
 * @param {T} injection - The object to merge into the target.
 * @returns {T} - The merged object with the properties from both target and injection.
 * @throws {Error} - If either target or injection arguments are not objects.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepMerge<T extends Record<string, any>>(target: T, injection: T): T {
  if (typeof target !== 'object' || typeof injection !== 'object') {
    throw new Error('Both target and injection arguments must be objects');
  }

  for (const key in injection) {
    if (Object.prototype.hasOwnProperty.call(injection, key)) {
      if (isObject(injection[key])) {
        // If the property is an object, recursively merge it
        if (!target[key]) {
          target[key] = {} as T[typeof key];
        }
        target[key] = deepMerge(target[key], injection[key]);
      } else if (Array.isArray(injection[key])) {
        // If the property is an array, concatenate or replace it
        target[key] = Array.isArray(target[key])
          ? target[key].concat(injection[key])
          : injection[key];
      } else {
        // Otherwise, assign the injection value to the target
        target[key] = injection[key];
      }
    }
  }

  return target;
}

export default deepMerge;
