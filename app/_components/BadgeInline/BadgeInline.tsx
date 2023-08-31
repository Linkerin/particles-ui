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
import styles from './BadgeInline.module.scss';

export interface BadgeInlineProps
  extends Omit<
    React.ComponentPropsWithoutRef<'span'>,
    'content' | 'aria-label'
  > {
  'aria-label': Required<React.ComponentProps<'span'>['aria-label']>;
  /**
   * Background color
   */
  color?: PuiColorNames;

  /**
   * Badge content
   */
  content?: string | number | React.ReactNode;

  /**
   * Shows whether the badge is an inline component or not
   */
  inline?: boolean;

  /**
   * Sets `opacity` to `0` to hide the badge
   */
  invisible?: boolean;

  /**
   * Horizontal position (works when `inline` = `false`)
   */
  horizontal?: 'left' | 'right';

  /**
   * Vertical position (works when `inline` = `false`)
   */
  vertical?: 'top' | 'bottom';

  /**
   * Maximum content's length
   */
  maxChars?: number;

  /**
   * Adds `outline` around the badge
   */
  outlined?: boolean;

  /**
   * Radius value
   */
  radius?: PuiRadius;

  /**
   * Shape of the underlying component
   */
  shape?: 'circle' | 'rectangle';

  /**
   * Adjusts paddings when the content consists only of 1 element
   */
  singleElement?: boolean;

  /**
   * Size value
   */
  size?: Extract<PuiSize, 'sm' | 'md' | 'lg'> | 'dot';

  /**
   * Styling variant
   */
  variant?: Extract<PuiStyleVariant, 'filled' | 'soft'>;
}

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
      inline = true,
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
      <span
        ref={ref}
        className={classNames(
          styles.badge,
          styles[variant],
          styles[size],
          radiusStyles[radius],
          { [styles[vertical]]: !inline },
          { [styles[horizontal]]: !inline },
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
    );
  }
);

export default BadgeInline;
