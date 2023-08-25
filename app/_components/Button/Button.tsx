'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import DualSpinner from '@/app/_components/DualSpinner/DualSpinner';
import { ButtonBaseProps, RadiusType } from '@/app/_lib/types';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonBaseProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loadingElement?: React.ReactElement;
  loadingText?: string;
  shrinkOnPress?: boolean;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'soft';
}

/**
 * Button component that enables users to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action,
 * or performing a delete operation.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/button | Particles UI | Button}
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    style,
    onClick,
    leftIcon,
    rightIcon,
    loadingElement,
    title,
    color = 'primary',
    disabled = false,
    isLoading = false,
    loadingText = '',
    noLoadingSpinner = false,
    radius = 'md',
    shrinkOnPress = false,
    size = 'md',
    variant = 'filled',
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      title={title}
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        styles[size],
        styles[`radius-${radius}`],
        { [styles.loading]: isLoading },
        { [styles.leftIcon]: !!leftIcon || (isLoading && !noLoadingSpinner) },
        {
          [styles.rightIcon]:
            !!rightIcon || (isLoading && !loadingText && !noLoadingSpinner)
        },
        { [styles.shrink]: shrinkOnPress },
        className
      )}
      style={style}
      disabled={disabled}
      aria-disabled={disabled || isLoading}
      onClick={isLoading ? undefined : onClick}
      {...props}
    >
      {isLoading ? (
        <>
          {!noLoadingSpinner && !loadingElement && (
            <DualSpinner data-pui-component="btn-load-spinner" />
          )}
          {!!loadingElement && loadingElement}
          {loadingText || children}
        </>
      ) : (
        <>
          {!!leftIcon && <span data-pui-component="btn-icon">{leftIcon}</span>}
          {children}
          {!!rightIcon && (
            <span data-pui-component="btn-icon">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
});

export default Button;
