import { forwardRef } from 'react';
import classNames from 'classnames';

import BadgeInline, { BadgeInlineProps } from '../BadgeInline/BadgeInline';

import styles from './Badge.module.scss';

export type BadgeProps = Omit<BadgeInlineProps, 'inline'>;

/**
 * Badge component is a small visual indicator for a notification,
 * item count or status. May use numbers, short text or icons.
 * This is an overlay version.
 *
 * We strongly recommend using no more than __4__ characters for content.
 *
 * By default, underlying component's `shape` is `'rectangle'`.
 * Provide the value `'circle'` if your underlying component is spherical.
 * @see {@link https://particles.snipshot.dev/docs/components/badge | Particles UI | Badge}
 */
const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, ...props },
  ref
) {
  return (
    <span className={classNames(styles['badge-container'])}>
      {children}
      <BadgeInline ref={ref} inline={false} {...props} />
    </span>
  );
});

export default Badge;
