import { forwardRef } from 'react';
import classNames from 'classnames';

import { BadgeBaseProps, BadgeProps } from './Badge.types';
import { BadgeInline } from '../BadgeInline/BadgeInline';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';

import styles from './Badge.module.scss';

export type { BadgeProps };

const DEFAULT_ELEMENT = 'span';

const _Badge = forwardRef<HTMLSpanElement, BadgeProps>(function _Badge(
  {
    children,
    className,
    as = DEFAULT_ELEMENT,
    vertical = 'top',
    horizontal = 'right',
    shape = 'rectangle',
    ...props
  },
  ref
) {
  return (
    <span
      className={classNames(styles['badge-container'], {
        [styles.circle]: shape === 'circle'
      })}
    >
      {children}
      <BadgeInline
        as={as}
        ref={ref}
        className={classNames(
          styles[vertical],
          styles[horizontal],
          { [styles.circle]: shape === 'circle' },
          className
        )}
        {...props}
      />
    </span>
  );
});

/**
 * Badge component is a small visual indicator for a notification,
 * item count or status. May use numbers, short text or icons.
 * This is an overlay version.
 *
 * We strongly recommend using no more than __4__ characters for content.
 *
 * By default, underlying component's `shape` is `'rectangle'`.
 * Provide the value `'circle'` if your underlying component is spherical.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/badge | Particles UI | Badge}
 */
export const Badge = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  BadgeBaseProps
>(_Badge);
