import { forwardRef } from 'react';
import classNames from 'classnames';

import { BadgeInlineProps } from './BadgeInline.types';
import truncateContent from './truncateContent';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './BadgeInline.module.scss';

export type { BadgeInlineProps };

/**
 * BadgeInline component is a small visual indicator for a notification,
 * item count or status. May use numbers, short text or icons.
 * This is a version for inline use.
 *
 * We strongly recommend using no more than __4__ characters for content.
 * @see {@link https://particles.snipshot.dev/docs/components/badge | Particles UI | Badge}
 */
const BadgeInline = forwardRef<HTMLSpanElement, BadgeInlineProps>(
  function BadgeInline(
    {
      children,
      className,
      content,
      maxChars,
      color = 'primary',
      invisible = false,
      outlined = false,
      radius = 'lg',
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
      <span
        ref={ref}
        className={classNames(
          styles.badge,
          styles[variant],
          styles[size],
          radiusStyles[radius],
          { [styles[color]]: color !== 'uncolored' },
          { [styles.invisible]: invisible },
          { [styles.outlined]: outlined },
          { [styles.single]: singleElement },
          className
        )}
        {...props}
      >
        {size !== 'dot' && badgeContent}
      </span>
    );
  }
);

export default BadgeInline;
