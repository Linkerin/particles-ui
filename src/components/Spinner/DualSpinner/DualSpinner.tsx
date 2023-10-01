import { forwardRef } from 'react';
import classNames from 'classnames';

import { SpinnerProps, StyleObj } from '../Spinner.types';

import styles from './DualSpinner.module.scss';

export type { SpinnerProps as DualSpinnerProps };

/**
 * Dual Spinner component
 *
 * @see {@link https://particles.snipshot.dev/docs/components/spinner | Particles UI | Spinner}
 */
export const DualSpinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  function DualSpinner({ className, style, speed, size = '', ...props }, ref) {
    const styleObj: StyleObj = {};
    if (speed) styleObj.animationDuration = speed;

    return (
      <span
        ref={ref}
        className={classNames(
          styles['dual-spinner'],
          { [styles[size]]: !!size },
          className
        )}
        role="status"
        {...props}
      >
        <span style={{ ...styleObj, ...style }} {...props} />
      </span>
    );
  }
);
