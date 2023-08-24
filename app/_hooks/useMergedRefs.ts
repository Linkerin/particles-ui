/**
 * Takes an array of refs and returns a ref callback that merges all the
 * refs together.
 * @param refs - An array of references
 * @returns A `React.RefCallback<T>`
 */
function useMergedRefs<T>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return element => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = element;
      }
    });
  };
}

export default useMergedRefs;
