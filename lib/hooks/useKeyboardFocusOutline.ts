import { useCallback } from 'react';

interface UseKeyboardFocusOutlineParams<T> {
  /**
   * React `onBlur` event handler
   */
  onBlur?: React.FocusEventHandler<T>;
  /**
   * React `onKeyUp` event handler
   */
  onKeyUp?: React.KeyboardEventHandler<T>;
}

/**
 * Event handlers that set and remove a data attribute to enable
 * element outline functioning when it was focused only via keyboard
 *
 * @returns `onKeyUp`, `onBlur` event handlers
 * and a classname for default outline styling
 */
function useKeyboardFocusOutline<T extends HTMLElement>({
  onKeyUp,
  onBlur
}: UseKeyboardFocusOutlineParams<T>) {
  /**
   * `onKeyUp` handler that adds `pui-outline-focus` className
   * when the element is focused via `Tab` key
   */
  const onKeyUpHandler: React.KeyboardEventHandler<T> = useCallback(
    e => {
      if (typeof document === 'undefined') return;

      const element = e.currentTarget as T;
      if (
        e.code === 'Tab' &&
        element === e.target &&
        element === document.activeElement
      ) {
        element.classList.add('pui-outline-focus');
      }

      onKeyUp?.(e);
    },
    [onKeyUp]
  );

  /**
   * `onBlur` handler that removes `pui-outline-focus` className
   */
  const onBlurHandler: React.FocusEventHandler<T> = useCallback(
    e => {
      e.currentTarget.classList.remove('pui-outline-focus');

      onBlur?.(e);
    },
    [onBlur]
  );

  return {
    onKeyUpHandler,
    onBlurHandler,
    outlineDefaultClassName: 'pui-outline-default'
  };
}

export default useKeyboardFocusOutline;
