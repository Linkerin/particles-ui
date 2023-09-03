import { useCallback } from 'react';

export interface UseInteractivityHandlerParams<T> {
  deleteBtnRef?: React.MutableRefObject<T | null>;
  disabled?: boolean;
  ref: React.MutableRefObject<T | null>;
  onClick?: React.EventHandler<React.MouseEvent<T>>;
  onClickCapture?: React.EventHandler<React.MouseEvent<T>>;
  onDelete?: React.EventHandler<React.MouseEvent<T>>;
  onKeyDown?: React.EventHandler<React.KeyboardEvent<T>>;
}

/**
 * Interactivity handlers for non-interactive by default HTML elements.
 * 
 * @returns An object containing three properties:
 * `onClickHandler`, `onClickCaptureHandler`, and `onKeyDownHandler`.
 * These properties are functions that can be used as event handlers
 * for the corresponding events (`onClick`, `onClickCapture`, and `onKeyDown`).
 * 
 * @example
 * const { onClickHandler, onClickCaptureHandler, onKeyDownHandler } =
     useInteractivityHandlers({
       disabled,
       onClick,
       onClickCapture,
       onKeyDown,
       ref: cardRef
     });
 */
function useInteractivityHandlers<T extends HTMLElement>({
  deleteBtnRef,
  disabled,
  ref,
  onClick,
  onClickCapture,
  onDelete,
  onKeyDown
}: UseInteractivityHandlerParams<T>) {
  /**
   * Checkes whether the `click` event target was a
   * 'clickable' element inside the container (like *button*, *input*, etc.).
   * If so, the container's `onClick` handler won't be called.
   *
   * 'Clickable' elements mentioned inside this function:
   * `button`, `a`, `input`, `textarea`, `select`, `option`.
   */
  const onClickHandler: React.MouseEventHandler<T> = useCallback(
    e => {
      if (!onClick || disabled) return;

      const element = e.target as T;
      const { isContentEditable } = element;
      const clickableElement = !!element.closest(
        'button, a, input, textarea, select, option'
      );

      // Prevent fire of the container's onClick handler
      // when a clickable element was clicked inside the container
      if (clickableElement || isContentEditable === true) {
        e.stopPropagation();
        return;
      }

      e.currentTarget.focus();
      onClick(e);
    },
    [onClick, disabled]
  );

  /**
   * Disables all `onClick` handlers inside the element when it's `disabled`
   */
  const onClickCaptureHandler: React.MouseEventHandler<T> = useCallback(
    e => {
      if (disabled) {
        e.stopPropagation();
        e.preventDefault();
      }

      onClickCapture?.(e);
    },
    [disabled, onClickCapture]
  );

  /**
   * Adds activation of event handlers for key press events.
   * If `Enter` or `Space` key is pressed, the `onClick` handler will be triggered.
   * If `Delete` or `Backspace` key is pressed, the `onDelete` handler will be triggered.
   */
  const onKeyDownHandler: React.KeyboardEventHandler<T> = useCallback(
    e => {
      if (e.target === ref?.current) {
        if (!!onClick && (e.code === 'Enter' || e.code === 'Space')) {
          e.preventDefault();

          ref.current.focus();
          ref.current.click();
        }

        if (
          !!onDelete &&
          (e.code === 'Backspace' || e.code === 'Delete') &&
          deleteBtnRef?.current
        ) {
          e.preventDefault();

          deleteBtnRef.current.focus();
          deleteBtnRef.current.click();
        }
      }

      onKeyDown?.(e);
    },
    [onClick, onKeyDown, ref, onDelete, deleteBtnRef]
  );

  return { onClickHandler, onClickCaptureHandler, onKeyDownHandler };
}

export default useInteractivityHandlers;
