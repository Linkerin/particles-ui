import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { TextProps } from './Text.types';

import styles from './Text.module.scss';

export type { TextProps };

/**
 * Text component is used to render text and paragraphs.
 *
 * By default, the component is rendered as a `<p>` element.
 * @see {@link https://particles.snipshot.dev/docs/components/text | Particles UI | Text}
 */
const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    children,
    className,
    style,
    as = 'p',
    color = 'inherit',
    size = 'md',
    truncate = false,
    variant = 'body',
    ...props
  },
  ref
) {
  return createElement(
    as,
    {
      ref,
      className: classNames(
        styles.text,
        styles[size],
        { [styles.truncate]: truncate },
        { [styles[variant]]: variant !== 'inherit' },
        { [styles[color]]: color !== 'inherit' },
        className
      ),
      style,
      ...props
    },
    children
  );
});

export default Text;
