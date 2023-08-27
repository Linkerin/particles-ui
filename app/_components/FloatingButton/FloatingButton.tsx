'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import DualSpinner from '../DualSpinner/DualSpinner';
import { ButtonBaseProps } from '@/app/_lib/types';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './FloatingButton.module.scss';

export interface FloatingButtonProps
  extends Omit<ButtonBaseProps, 'aria-label' | 'color' | 'size' | 'title'> {
  'aria-label': React.AriaAttributes['aria-label'];
  color?: ButtonBaseProps['color'] | 'background';
  loadingText?: string;
  lowered?: boolean;
  // radius?: PuiRadius;
  size?: Exclude<ButtonBaseProps['size'], 'xs' | 'xl'>;
  title: React.HTMLAttributes<HTMLButtonElement>['title'];
}

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
      onClick,
      title,
      radius,
      color = 'primary',
      disabled = false,
      isLoading = false,
      loadingText = '',
      lowered = false,
      noLoadingSpinner = false,
      size = 'md',
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.fab,
          styles[size],
          styles[color],
          { [styles.lowered]: lowered },
          { [styles.loading]: isLoading },
          { [radiusStyles[`${radius}`]]: !!radius },
          className
        )}
        title={title}
        disabled={disabled}
        aria-disabled={disabled || isLoading}
        onClick={isLoading ? undefined : onClick}
        {...props}
      >
        {isLoading ? (
          <>
            {!noLoadingSpinner && (
              <DualSpinner data-pui-component="fab-load-spinner" />
            )}
            {noLoadingSpinner && !loadingText ? children : loadingText}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default FloatingButton;
