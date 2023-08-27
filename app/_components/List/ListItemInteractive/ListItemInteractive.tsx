'use client';

import { forwardRef, useCallback, useRef } from 'react';
import classNames from 'classnames';

import { DivElementProps } from '@/app/_lib/puiHTMLPropTypes';
import ListItem, { ListItemProps } from '../ListItem/ListItem';
import ListItemIcon from '../ListItemIcon/ListItemIcon';
import useMergedRefs from '@/app/_hooks/useMergedRefs';
import useInteractivityHandlers from '@/app/_hooks/useInteractivityHandlers';

import alignItemsStyles from '../../../styles/particles-ui/util-classes/align-items.module.scss';
import styles from './ListItemInteractive.module.scss';

export interface ListItemInteractiveProps
  extends Omit<
    ListItemProps,
    'ref' | 'role' | 'onClick' | 'onClickCapture' | 'onKeyDown'
  > {
  disabled?: boolean;
  interactiveDivRef?: DivElementProps['ref'];
  onClick?: DivElementProps['onClick'];
  onClickCapture?: DivElementProps['onClickCapture'];
  onKeyDown?: DivElementProps['onKeyDown'];
  role?: DivElementProps['role'];
  selected?: boolean;
}

/**
 * ListItemInteractive is an `<li>` element wrapper with additional features.
 * This component is intended to be interactive and used in conjunction with the `List` component.
 * For static usage, use the `ListItem` component.
 *
 * Partially implemented the Listbox pattern:
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/listbox | WAI-ARIA | Listbox Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
const ListItemInteractive = forwardRef<HTMLLIElement, ListItemInteractiveProps>(
  function ListItemInteractive(
    {
      children,
      className,
      onClick,
      onClickCapture,
      onKeyDown,
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
            { [styles.disabled]: disabled },
            { [styles.selected]: selected }
          )}
          role={role}
          aria-disabled={role !== 'listitem' ? disabled : undefined}
          onClick={disabled ? undefined : onClickHandler}
          onClickCapture={onClickCaptureHandler}
          onKeyDown={onKeyDownArrowsHandler}
          tabIndex={disabled ? undefined : tabIndex}
        >
          {inset && <ListItemIcon />}
          {children}
        </div>
      </ListItem>
    );
  }
);

export default ListItemInteractive;
