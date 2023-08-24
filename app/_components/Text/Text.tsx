import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { HtmlElementProps } from '@/app/_lib/puiHTMLPropTypes';
import { TypographyColorsType, SizesType } from '@/app/_lib/types';

import styles from './Text.module.scss';

export interface TextProps extends HtmlElementProps {
  as?:
    | 'p'
    | 'span'
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
  color?: TypographyColorsType;
  size?: Exclude<SizesType, 'xs'>;
  variant?: 'body' | 'label';
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
        styles[variant],
        styles[color],
        styles[size],
        className
      ),
      style,
      ...props
    },
    children
  );
});

export default Text;
