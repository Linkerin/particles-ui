'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import DualSpinner from '..//DualSpinner/DualSpinner';
import useKeyboardFocusOutline from '../../_hooks/useKeyboardFocusOutline';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Button.module.scss';

import { ButtonProps } from './Button.types';

export type { ButtonProps };

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
    onBlur,
    onClick,
    onKeyUp,
    leftIcon,
    rightIcon,
    loadingElement,
    title,
    color = 'primary',
    dense = false,
    disabled = false,
    isLoading = false,
    loadingText = '',
    loadingSpinner = true,
    radius = 'md',
    shadowOnPress = false,
    shrinkOnPress = false,
    size = 'md',
    variant = 'filled',
    ...props
  },
  ref
) {
  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({
      onBlur,
      onKeyUp
    });

  return (
    <button
      ref={ref}
      title={title}
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        styles[size],
        radiusStyles[radius],
        outlineDefaultClassName,
        { [styles.dense]: dense },
        { [styles.loading]: isLoading },
        { [styles.leftIcon]: !!leftIcon || (isLoading && loadingSpinner) },
        {
          [styles.rightIcon]:
            !!rightIcon || (isLoading && !loadingText && loadingSpinner)
        },
        { [styles.shrink]: shrinkOnPress },
        { [styles.pressShadow]: shadowOnPress },
        className
      )}
      style={style}
      disabled={disabled}
      aria-disabled={disabled || isLoading}
      onClick={isLoading ? undefined : onClick}
      onBlur={onBlurHandler}
      onKeyUp={onKeyUpHandler}
      {...props}
    >
      {isLoading ? (
        <>
          {loadingSpinner && !loadingElement && (
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
