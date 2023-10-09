import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { BadgeInlineBaseProps, BadgeInlineProps } from './BadgeInline.types';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import truncateContent from './truncateContent';

import styles from './BadgeInline.module.scss';

export type { BadgeInlineProps };

const DEFAULT_ELEMENT = 'span';

const _BadgeInline = forwardRef<HTMLSpanElement, BadgeInlineProps>(
  function _BadgeInline(
    {
      className,
      content,
      maxChars,
      as = DEFAULT_ELEMENT,
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
      <Box
        ref={ref}
        as={as}
        className={classNames(
          styles.badge,
          styles[variant],
          styles[size],
          `pui-radius-${radius}`,
          { [styles[color]]: color !== 'uncolored' },
          { [styles.invisible]: invisible },
          { [styles.outlined]: outlined },
          { [styles.single]: singleElement },
          className
        )}
        aria-hidden={invisible}
        {...props}
      >
        {size !== 'dot' && badgeContent}
      </Box>
    );
  }
);

/**
 * BadgeInline component is a small visual indicator for a notification,
 * item count or status. May use numbers, short text or icons.
 * This is a version for inline use.
 *
 * We strongly recommend using no more than __4__ characters for content.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/badge | Particles UI | Badge}
 */
export const BadgeInline = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  BadgeInlineBaseProps
>(_BadgeInline);
