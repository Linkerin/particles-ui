'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import DualSpinner from '../DualSpinner/DualSpinner';
import { FloatingButtonProps } from './FloatingButton.types';
import useKeyboardFocusOutline from '../../_hooks/useKeyboardFocusOutline';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './FloatingButton.module.scss';

export type { FloatingButtonProps };

/**
 * Floating action button component for the most common or important action on a screen.
 * Floating button appear in front of all other content on the screen and should persist
 * when the content is being scrolled.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/floating-button | Particles UI | FloatingButton}
 */
const FloatingButton = forwardRef<HTMLButtonElement, FloatingButtonProps>(
  function FloatingButton(
    {
      children,
      className,
      onBlur,
      onClick,
      onKeyUp,
      title,
      radius,
      color = 'primary',
      disabled = false,
      isLoading = false,
      loadingText = '',
      lowered = false,
      loadingSpinner = true,
      size = 'md',
      ...props
    },
    ref
  ) {
    const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
      useKeyboardFocusOutline({ onBlur, onKeyUp });

    return (
      <button
        ref={ref}
        className={classNames(
          styles.fab,
          styles[size],
          styles[color],
          outlineDefaultClassName,
          { [styles.lowered]: lowered },
          { [styles.loading]: isLoading },
          { [radiusStyles[`${radius}`]]: !!radius },
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
            {loadingSpinner && (
              <DualSpinner data-pui-component="fab-load-spinner" />
            )}
            {!loadingSpinner && !loadingText ? children : loadingText}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default FloatingButton;
