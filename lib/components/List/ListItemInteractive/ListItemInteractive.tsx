'use client';

import { forwardRef, useCallback, useRef } from 'react';
import classNames from 'classnames';

import { ListItem } from '../ListItem/ListItem';
import { ListItemIcon } from '../ListItemIcon/ListItemIcon';
import { ListItemInteractiveProps } from './ListItemInteractive.types';
import useInteractivityHandlers from '../../../hooks/useInteractivityHandlers';
import useKeyboardFocusOutline from '../../../hooks/useKeyboardFocusOutline';
import useMergedRefs from '../../../hooks/useMergedRefs';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import styles from './ListItemInteractive.module.scss';

export type { ListItemInteractiveProps };

/**
 * ListItemInteractive is an `<li>` element wrapper with additional features.
 * This component is intended to be interactive and used in conjunction with the `List` component.
 * For static usage, use the `ListItem` component.
 *
 * Partially implemented the Listbox pattern:
 *
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/listbox | WAI-ARIA | Listbox Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
export const ListItemInteractive = forwardRef<
  HTMLLIElement,
  ListItemInteractiveProps
>(function ListItemInteractive(
  {
    children,
    className,
    onBlur,
    onClick,
    onClickCapture,
    onKeyDown,
    onKeyUp,
    alignItems = 'center',
    interactiveDivRef = null,
    role = 'button',
    disabled = false,
    inset = false,
    tabIndex = 0,
    selected = false,
    ...props
  },
  ref
) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const mergedRef = useMergedRefs([interactiveDivRef, divRef]);

  const { onClickHandler, onClickCaptureHandler, onKeyDownHandler } =
    useInteractivityHandlers({
      disabled,
      onClick,
      onClickCapture,
      onKeyDown,
      ref: divRef
    });

  const onKeyDownArrowsHandler: React.KeyboardEventHandler<HTMLDivElement> =
    useCallback(
      e => {
        if (
          e.target !== divRef.current ||
          !['ArrowUp', 'ArrowDown'].includes(e.code)
        ) {
          onKeyDownHandler(e);
          return;
        }

        const element = e.target as HTMLDivElement;
        const parent = element.parentElement as HTMLLIElement;
        if (e.code === 'ArrowUp') {
          const prevElement = parent.previousElementSibling as HTMLElement;
          if (prevElement?.dataset?.puiComponent === 'li-interactive') {
            const prevElementChild = prevElement.children[0] as HTMLElement;
            prevElementChild.focus();
          }
        }

        if (e.code === 'ArrowDown') {
          const nextElement = parent.nextElementSibling as HTMLElement;
          if (nextElement?.dataset?.puiComponent === 'li-interactive') {
            const nextElementChild = nextElement.children[0] as HTMLElement;
            nextElementChild.focus();
          }
        }

        onKeyDown?.(e);
      },
      [onKeyDownHandler, onKeyDown]
    );

  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline<HTMLDivElement | HTMLLIElement>({
      onBlur,
      onKeyUp
    });

  return (
    <ListItem
      ref={ref}
      className={classNames(styles.reset, className)}
      data-pui-component="li-interactive"
      {...props}
    >
      <div
        ref={mergedRef}
        className={classNames(
          styles['li-interactive'],
          alignItemsStyles[alignItems],
          outlineDefaultClassName,
          { [styles.disabled]: disabled },
          { [styles.selected]: selected }
        )}
        role={role}
        aria-disabled={role !== 'listitem' ? disabled : undefined}
        onBlur={onBlurHandler}
        onClick={disabled ? undefined : onClickHandler}
        onClickCapture={onClickCaptureHandler}
        onKeyDown={onKeyDownArrowsHandler}
        onKeyUp={onKeyUpHandler}
        tabIndex={disabled ? undefined : tabIndex}
      >
        {inset && <ListItemIcon />}
        {children}
      </div>
    </ListItem>
  );
});
