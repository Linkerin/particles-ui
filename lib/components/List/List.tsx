import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import { ListBaseProps, ListProps } from './List.types';

import styles from './List.module.scss';

export type { ListProps };

const DEFAULT_ELEMENT = 'ul';

const _List = forwardRef<HTMLUListElement, ListProps>(function _List(
  {
    children,
    className,
    as = DEFAULT_ELEMENT,
    dense = false,
    pdInline = true,
    role = 'list',
    ...props
  },
  ref
) {
  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.list,
        { [styles.dense]: dense },
        { [styles['no-pd-inline']]: !pdInline },
        className
      )}
      role={role}
      {...props}
    >
      {children}
    </Box>
  );
});

/**
 * List component: vertically organized groups of text and images.
 *
 * By default, the component is rendered as an `<ul>` element.
 *
 * @see {@link https://www.w3.org/WAI/tutorials/page-structure/content/#lists | WAI | Content Structure}
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
export const List = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  ListBaseProps
>(_List);
