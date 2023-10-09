'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { DualSpinner } from '../Spinner/DualSpinner/DualSpinner';
import {
  FloatingButtonBaseProps,
  FloatingButtonProps
} from './FloatingButton.types';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';

import styles from './FloatingButton.module.scss';

export type { FloatingButtonProps };

const DEFAULT_ELEMENT = 'button';
const mappingSizeRadius = {
  sm: 'md',
  md: 'lg',
  lg: 'xl'
};

const _FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  function _FloatingButton(
    {
      children,
      className,
      loadingElement,
      onBlur,
      onClick,
      onKeyUp,
      title,
      as = DEFAULT_ELEMENT,
      color = 'primary',
      disabled = false,
      isLoading = false,
      loadingText = '',
      lowered = false,
      loadingSpinner = true,
      size = 'md',
      radius = mappingSizeRadius[size],
      ...props
    },
    ref
  ) {
    const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
      useKeyboardFocusOutline({ onBlur, onKeyUp });

    return (
      <Box
        ref={ref}
        as={as}
        className={classNames(
          styles.fab,
          styles[size],
          styles[color],
          outlineDefaultClassName,
          { [styles.lowered]: lowered },
          { [styles.loading]: isLoading },
          `pui-radius-${radius}`,
          className
        )}
        title={title}
        disabled={disabled}
        aria-disabled={disabled || isLoading}
        onBlur={onBlurHandler}
        onClick={isLoading ? undefined : onClick}
        onKeyUp={onKeyUpHandler}
        {...props}
      >
        {isLoading ? (
          <>
            {loadingSpinner && loadingElement ? (
              loadingElement
            ) : (
              <DualSpinner data-pui-component="fab-load-spinner" />
            )}
            {!loadingSpinner && !loadingText ? children : loadingText}
          </>
        ) : (
          children
        )}
      </Box>
    );
  }
);

/**
 * Floating action button component for the most common or important action on a screen.
 * Floating button appear in front of all other content on the screen and should persist
 * when the content is being scrolled.
 *
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/floating-button | Particles UI | FloatingButton}
 */
export const FloatingButton = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  FloatingButtonBaseProps
>(_FloatingButton);
