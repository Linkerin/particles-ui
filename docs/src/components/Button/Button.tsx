'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { DualSpinner } from '../Spinner/DualSpinner/DualSpinner';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';

import styles from './Button.module.scss';

import { ButtonBaseProps, ButtonProps } from './Button.types';

export type { ButtonProps };

const DEFAULT_ELEMENT = 'button';

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(function _Button(
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
    as = DEFAULT_ELEMENT,
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
    <Box
      ref={ref}
      as={as}
      title={title}
      className={classNames(
        styles.button,
        styles[variant],
        styles[color],
        styles[size],
        `pui-radius-${radius}`,
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
    </Box>
  );
});

/**
 * Button component that enables users to trigger an action or event,
 * such as submitting a form, opening a dialog, canceling an action,
 * or performing a delete operation.
 *
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/button | Particles UI | Button}
 */
export const Button = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  ButtonBaseProps
>(_Button);