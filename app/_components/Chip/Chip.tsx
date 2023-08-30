'use client';

import { forwardRef, useRef } from 'react';
import classNames from 'classnames';

import CloseButton from '../CloseButton/CloseButton';
import { DivElementProps } from '@/app/_lib/puiHTMLPropTypes';
import {
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '@/app/_lib/types';
import useInteractivityHandlers from '@/app/_hooks/useInteractivityHandlers';
import useMergedRefs from '@/app/_hooks/useMergedRefs';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Chip.module.scss';

export interface ChipProps extends DivElementProps {
  disabled?: boolean;
  color?: PuiColorNames;
  interactiveStyle?: boolean;
  leftIcon?: React.ReactElement;
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  radius?: Exclude<PuiRadius, 'round'>;
  rightIcon?: React.ReactElement;
  size?: PuiSize;
  variant?: PuiStyleVariant;
}

/**
 * Chip component that is used to represent element of a data set
 * and can handle user actions.
 * Can be clickable and deletable base on `onClick` and `onDelete` props.
 *
 * Do not use `Chip` where `Button` shoud be used.
 *
 * The component renders a `div` element.
 * @see {@link https://particles.snipshot.dev/docs/components/chip | Particles UI | Chip}
 *
 */
const Chip = forwardRef<HTMLDivElement, ChipProps>(function Chip(
  {
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    onDelete,
    onClickCapture,
    onKeyDown,
    style,
    disabled = false,
    color = 'primary',
    interactiveStyle = false,
    radius = 'sm',
    size = 'md',
    variant = 'outlined'
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

  return (
    <div
      ref={mergedRefs}
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
        className
      )}
      style={style}
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClickHandler}
      onClickCapture={onClickCaptureHandler}
      onKeyDown={onKeyDownHandler}
      tabIndex={clickable && !disabled ? 0 : undefined}
      role={clickable ? 'button' : undefined}
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
    </div>
  );
});

export default Chip;
