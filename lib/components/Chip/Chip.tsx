'use client';

import { forwardRef, useRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { ChipBaseProps, ChipProps } from './Chip.types';
import { CloseButton } from '../CloseButton/CloseButton';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import useInteractivityHandlers from '../../hooks/useInteractivityHandlers';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';
import useMergedRefs from '../../hooks/useMergedRefs';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Chip.module.scss';

export type { ChipProps };

const DEFAULT_ELEMENT = 'div';

const _Chip = forwardRef<HTMLDivElement, ChipProps>(function _Chip(
  {
    children,
    className,
    leftIcon,
    rightIcon,
    onBlur,
    onClick,
    onDelete,
    onClickCapture,
    onKeyDown,
    onKeyUp,
    as = DEFAULT_ELEMENT,
    disabled = false,
    color = 'primary',
    interactiveStyle = false,
    radius = 'sm',
    size = 'md',
    variant = 'outlined',
    ...props
  },
  ref
) {
  const chipRef = useRef<HTMLDivElement | null>(null);
  const mergedRefs = useMergedRefs([chipRef, ref]);
  const deleteBtnRef = useRef<HTMLButtonElement | null>(null);

  const clickable =
    interactiveStyle || (!!onClick && typeof onClick === 'function');

  const { onClickHandler, onClickCaptureHandler, onKeyDownHandler } =
    useInteractivityHandlers<HTMLDivElement | HTMLButtonElement>({
      disabled,
      onClick,
      onClickCapture,
      onKeyDown,
      onDelete,
      deleteBtnRef,
      ref: chipRef
    });

  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({ onBlur, onKeyUp });

  return (
    <Box
      ref={mergedRefs}
      as={as}
      className={classNames(
        styles.chip,
        styles[variant],
        styles[color],
        styles[size],
        radiusStyles[radius],
        { [styles.leftIcon]: !!leftIcon },
        { [styles.rightIcon]: !!rightIcon || !!onDelete },
        { [styles.static]: !clickable },
        { [styles.disabled]: disabled },
        { [outlineDefaultClassName]: clickable },
        className
      )}
      aria-disabled={disabled}
      onBlur={clickable ? onBlurHandler : onBlur}
      onClick={disabled ? undefined : onClickHandler}
      onClickCapture={onClickCaptureHandler}
      onKeyDown={onKeyDownHandler}
      onKeyUp={clickable ? onKeyUpHandler : onKeyUp}
      tabIndex={clickable && !disabled ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      {...props}
    >
      {!!leftIcon && <span data-pui-component="chip-icon">{leftIcon}</span>}
      {children}
      {!!onDelete ? (
        <CloseButton
          ref={deleteBtnRef}
          disabled={disabled}
          color="uncolored"
          onClick={onDelete}
        />
      ) : (
        !!rightIcon && <span data-pui-component="chip-icon">{rightIcon}</span>
      )}
    </Box>
  );
});

/**
 * Chip component that is used to represent element of a data set
 * and can handle user actions.
 * Can be 'clickable' and 'deletable' based on `onClick` and `onDelete` props.
 *
 * Do not use `Chip` where `Button` shoud be used.
 *
 * The component renders a `div` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/chip | Particles UI | Chip}
 *
 */
export const Chip = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  ChipBaseProps
>(_Chip);
