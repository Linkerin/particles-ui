import { forwardRef } from 'react';
import classNames from 'classnames';

import { HrElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './DividerHr.module.scss';

export interface DividerHrProps extends Omit<HrElementProps, 'ref'> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'full' | 'inset' | 'middle';
}

const DividerHr = forwardRef<HTMLHRElement, DividerHrProps>(function DividerHr(
  { className, orientation = 'horizontal', variant = 'full', ...props },
  ref
) {
  return (
    <hr
      ref={ref}
      aria-orientation={orientation}
      className={classNames(
        styles[orientation],
        { [styles[variant]]: ['inset', 'middle'].includes(variant) },
        className
      )}
      {...props}
    />
  );
});

export default DividerHr;
