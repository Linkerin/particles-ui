import { forwardRef } from 'react';
import classNames from 'classnames';

import { LiElementProps } from '@/app/_lib/puiHTMLPropTypes';
import ListItemIcon from '../ListItemIcon/ListItemIcon';

import styles from './ListItem.module.scss';

export interface ListItemProps extends LiElementProps {
  alignItems?: Extract<
    React.CSSProperties['alignItems'],
    'center' | 'flex-start' | 'flex-end' | 'stretch'
  >;
  divider?: 'full' | 'middle' | 'inset';
  dividerPosition?: 'top' | 'bottom' | 'both';
  inset?: boolean;
}

/**
 * ListItem is an `<li>` element wrapper with additional features.
 * This component is intended to be static and used in conjunction with the `List` component.
 * For interactive usage, use the `ListItemInteractive` component.
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
const ListItem = forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  {
    children,
    className,
    style,
    divider,
    alignItems = 'center',
    dividerPosition = 'bottom',
    inset = false,
    ...props
  },
  ref
) {
  return (
    <li
      ref={ref}
      className={classNames(
        styles['list-item'],
        styles[`align-items-${alignItems}`],
        { [styles[`divider-${divider}`]]: !!divider },
        {
          [styles.top]:
            !!divider &&
            (dividerPosition === 'top' || dividerPosition === 'both')
        },
        {
          [styles.bottom]:
            !!divider &&
            (dividerPosition === 'bottom' || dividerPosition === 'both')
        },
        className
      )}
      style={style}
      {...props}
    >
      {inset && <ListItemIcon />}
      {children}
    </li>
  );
});

export default ListItem;
