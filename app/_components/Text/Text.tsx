import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { HtmlElementProps } from '@/app/_lib/puiHTMLPropTypes';
import { PuiSize } from '@/app/_lib/types';

import styles from './Text.module.scss';

export interface TextProps extends Omit<HtmlElementProps, 'ref'> {
  as?:
    | 'p'
    | 'span'
    | 'strong'
    | 'b'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'code'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup';
  color?: 'on-background' | 'on-background-variant' | 'inherit';
  size?: Exclude<PuiSize, 'xs'>;
  truncate?: boolean;
  variant?: 'body' | 'label' | 'inherit';
}

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
    color = 'on-background',
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
