import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { getListCssVars, listDefaultProps } from './List.defaults';
import { ListBaseProps, ListProps } from './List.types';
import shallowMerge from '../../services/shallowMerge';

import styles from './List.module.scss';

export type { ListProps };

const _List = forwardRef<HTMLUListElement, ListProps>(function _List(
  props,
  ref
) {
  const {
    children,
    className,
    style,
    as,
    dense,
    pdInline,
    role,
    ...restProps
  }: ListProps = shallowMerge(listDefaultProps, props);

  const listCssVars = getListCssVars(pdInline);

  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(styles.list, { [styles.dense]: dense }, className)}
      role={role}
      style={{ ...listCssVars, ...style }}
      {...restProps}
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
  typeof listDefaultProps.as,
  ListBaseProps
>(_List);
