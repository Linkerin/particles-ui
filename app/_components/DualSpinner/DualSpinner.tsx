import { forwardRef } from 'react';
import classNames from 'classnames';

import { SizesType } from '@/app/_lib/types';
import { SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './DualSpinner.module.scss';

export interface DualSpinnerProps extends Omit<SpanElementProps, 'color'> {
  size?: SizesType | 'xxl';
  speed?: React.CSSProperties['animationDuration'];
}

type StyleObjType = Pick<
  React.CSSProperties,
  'borderColor' | 'animationDuration'
>;

/**
 * Dual Spinner component
 * @see {@link https://particles.snipshot.dev/docs/components/dual-spinner | Particles UI | Dual Spinner}
 */
const DualSpinner = forwardRef<HTMLSpanElement, DualSpinnerProps>(
  function DualSpinner({ className, style, speed, size = '', ...props }, ref) {
    const styleObj: StyleObjType = {};
    if (!!speed) styleObj.animationDuration = speed;

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
