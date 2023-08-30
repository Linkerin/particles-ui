import { forwardRef } from 'react';
import classNames from 'classnames';

import {
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '@/app/_lib/types';
import truncateContent from './truncateContent';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Badge.module.scss';

export interface BadgeProps
  extends Omit<
    React.ComponentPropsWithoutRef<'span'>,
    'content' | 'aria-label'
  > {
  'aria-label': Required<React.ComponentProps<'span'>['aria-label']>;
  color?: PuiColorNames;
  content?: string | number | React.ReactNode;
  invisible?: boolean;
  horizontal?: 'left' | 'right';
  vertical?: 'top' | 'bottom';
  maxChars?: number;
  outlined?: boolean;
  radius?: PuiRadius;
  shape?: 'circle' | 'rectangle';
  singleElement?: boolean;
  size?: Extract<PuiSize, 'sm' | 'md' | 'lg'> | 'dot';
  variant?: Extract<PuiStyleVariant, 'filled' | 'soft'>;
}

/**
 * Badge component is a small visual indicator for a notification,
 * item count or status. May use numbers, short text or icons.
 *
 * We strongly recommend using no more than __4__ characters.
 *
 * By default, underlying component's `shape` is `'rectangle'`.
 * Provide the value `'circle'` if your underlying component is spherical.
 * @see {@link https://particles.snipshot.dev/docs/components/badge | Particles UI | Badge}
 */

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    children,
    className,
    content,
    maxChars,
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
  let badgeContent = content;
  if (
    typeof maxChars === 'number' &&
    (typeof content === 'number' || typeof content === 'string')
  ) {
    badgeContent = truncateContent(content, maxChars);
  }

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
        {size !== 'dot' && badgeContent}
      </span>
    </span>
  );
});

export default Badge;
