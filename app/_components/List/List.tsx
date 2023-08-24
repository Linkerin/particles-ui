import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { UlElementProps, OlElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './List.module.scss';

interface ListComponentProps {
  dense?: boolean;
  noPdInline?: boolean;
}

export type ListProps =
  | ({ as?: 'ol' } & OlElementProps & ListComponentProps)
  | ({ as?: 'ul' } & UlElementProps & ListComponentProps);

/**
 * List component: vertically organized groups of text and images.
 *
 * By default, the component is rendered as an `<ol>` element.
 * @see {@link https://www.w3.org/WAI/tutorials/page-structure/content/#lists | WAI | Content Structure}
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  function List(
    {
      children,
      className,
      as = 'ol',
      dense = false,
      noPdInline = false,
      ...props
    },
    ref
  ) {
    return createElement(
      as,
      {
        ref,
        className: classNames(
          styles.list,
          { [styles.dense]: dense },
          { [styles['no-pd-inline']]: noPdInline },
          className
        ),
        ...props
      },
      children
    );
  }
);

export default List;
