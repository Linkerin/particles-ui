import { forwardRef } from 'react';
import classNames from 'classnames';

import { DividerHrProps } from './DividerHr.types';

import styles from './DividerHr.module.scss';

export type { DividerHrProps };

export const DividerHr = forwardRef<HTMLHRElement, DividerHrProps>(
  function DividerHr(
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
  }
);
