import { forwardRef } from 'react';
import classNames from 'classnames';

import { SpinnerProps, StyleObj } from '../Spinner.types';

import styles from './RingSpinner.module.scss';

export type { SpinnerProps as RingSpinnerProps };

/**
 * Ring Spinner component
 *
 * @see {@link https://particles.snipshot.dev/docs/components/spinner | Particles UI | Spinner}
 */
export const RingSpinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function RingSpinner({ className, speed, size = '', ...props }, ref) {
    const styleObj: StyleObj = {};
    if (speed) styleObj.animationDuration = speed;

    return (
      <span
        ref={ref}
        className={classNames(
          styles['ring-spinner'],
          { [styles[size]]: !!size },
          className
        )}
        role="status"
        {...props}
      >
        <span />
        <span />
        <span />
        <span />
      </span>
    );
  }
);
