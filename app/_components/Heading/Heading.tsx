import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { HeadingElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './Heading.module.scss';

type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HeadingElementProps {
  as?: HeadingElements | 'span';
  color?: 'on-background' | 'on-background-variant' | 'inherit';
  truncate?: boolean;
  variant?:
    | HeadingElements
    | 'subtitle-lg'
    | 'subtitle-md'
    | 'subtitle-sm'
    | 'inherit';
}

/**
 * Heading component is used to render semantic HTML heading elements.
 *
 * By default, the component is rendered as a `<h2>` element.
 * Do not skip heading levels.
 * @see {@link https://www.w3.org/WAI/tutorials/page-structure/headings | WAI-ARIA | Headings}
 * @see {@link https://particles.snipshot.dev/docs/components/heading | Particles UI | Heading}
 */
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  {
    children,
    className,
    style,
    as = 'h2',
    color = 'on-background',
    truncate = false,
    variant = as !== 'span' ? as : 'subtitle-md',
    ...props
  },
  ref
) {
  return createElement(
    as,
    {
      ref,
      className: classNames(
        styles.heading,
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

export default Heading;
