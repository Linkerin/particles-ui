'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { ButtonBaseProps, ButtonProps } from './Button.types';
import { buttonDefaultProps, getButtonCssVars } from './Button.defaults';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { DualSpinner } from '../Spinner/DualSpinner/DualSpinner';
import shallowMerge from '../../services/shallowMerge';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';

import styles from './Button.module.scss';

export type { ButtonProps };

const _Button = forwardRef<HTMLButtonElement, ButtonProps>(function _Button(
  props,
  ref
) {
  const {
    children,
    className,
    style,
    onBlur,
    onClick,
    onKeyUp,
    leftIcon,
    rightIcon,
    loadingElement,
    as,
    color,
    dense,
    disabled,
    isLoading,
    loadingText,
    loadingSpinner,
    radius,
    shadowOnPress,
    shrinkOnPress,
    size,
    variant,
    ...restProps
  }: ButtonProps = shallowMerge(buttonDefaultProps, props);

  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({
      onBlur,
      onKeyUp
    });

  const buttonCssVars = getButtonCssVars({ color, size });

  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.button,
        styles[`${variant}`],
        // styles[`${size}`],
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
      style={{ ...buttonCssVars, ...style }}
      disabled={disabled}
      aria-disabled={disabled || isLoading}
      onClick={isLoading ? undefined : onClick}
      onBlur={onBlurHandler}
      onKeyUp={onKeyUpHandler}
      {...restProps}
    >
      {isLoading ? (
        <>
          {loadingSpinner && !loadingElement && (
            <DualSpinner
              className={styles['btn-load-spinner']}
              data-pui-component="btn-load-spinner"
            />
          )}
          {!!loadingElement && loadingElement}
          {loadingText || children}
        </>
      ) : (
        <>
          {!!leftIcon && (
            <span className={styles['btn-icon']} data-pui-component="btn-icon">
              {leftIcon}
            </span>
          )}
          {children}
          {!!rightIcon && (
            <span className={styles['btn-icon']} data-pui-component="btn-icon">
              {rightIcon}
            </span>
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
  typeof buttonDefaultProps.as,
  ButtonBaseProps
>(_Button);
