import { forwardRef } from 'react';
import classNames from 'classnames';

import { SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';
import {
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '@/app/_lib/types';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Badge.module.scss';

export interface BadgeProps
  extends Omit<SpanElementProps, 'content' | 'aria-label'> {
  'aria-label': Required<SpanElementProps['aria-label']>;
  color?: PuiColorNames;
  content?: string | number | React.ReactNode;
  invisible?: boolean;
  outlined?: boolean;
  vertical?: 'top' | 'bottom';
  horizontal?: 'left' | 'right';
  radius?: PuiRadius;
  shape?: 'circle' | 'rectangle';
  singleElement?: boolean;
  size?: Extract<PuiSize, 'sm' | 'md' | 'lg'> | 'dot';
  variant?: Extract<PuiStyleVariant, 'filled' | 'soft'>;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    className,
    content,
    color = 'primary',
    invisible = false,
    vertical = 'top',
    horizontal = 'right',
    outlined = false,
    radius = 'lg',
    shape = 'rectangle',
    singleElement = false,
    size = 'md',
    variant = 'filled',
    ...props
  },
  ref
) {
  return (
    <span className={classNames(styles['badge-container'])}>
      {children}
      <span
        ref={ref}
        className={classNames(
          styles.badge,
          styles[variant],
          styles[size],
          styles[vertical],
          styles[horizontal],
          radiusStyles[radius],
          { [styles[color]]: color !== 'uncolored' },
          { [styles.invisible]: invisible },
          { [styles.outlined]: outlined },
          { [styles.single]: singleElement },
          { [styles.circle]: shape === 'circle' },
          className
        )}
        {...props}
      >
        {size !== 'dot' && content}
      </span>
    </span>
  );
});

export default Badge;
