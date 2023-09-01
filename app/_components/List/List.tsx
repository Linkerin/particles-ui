import { createElement, forwardRef } from 'react';
import classNames from 'classnames';

import { ListProps } from './List.types';

import styles from './List.module.scss';

export type { ListProps };

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
      noInlinePd = false,
      role = 'list',
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
          { [styles['no-pd-inline']]: noInlinePd },
          className
        ),
        role,
        ...props
      },
      children
    );
  }
);

export default List;
