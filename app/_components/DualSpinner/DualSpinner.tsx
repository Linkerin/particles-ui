import { forwardRef } from 'react';
import classNames from 'classnames';

import { DualSpinnerProps, StyleObj } from './DualSpinner.types';

import styles from './DualSpinner.module.scss';

export type { DualSpinnerProps };

/**
 * Dual Spinner component
 * @see {@link https://particles.snipshot.dev/docs/components/dual-spinner | Particles UI | Dual Spinner}
 */
const DualSpinner = forwardRef<HTMLSpanElement, DualSpinnerProps>(
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

export default DualSpinner;
