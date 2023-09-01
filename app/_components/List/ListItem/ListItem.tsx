import { forwardRef } from 'react';
import classNames from 'classnames';

import ListItemIcon from '../ListItemIcon/ListItemIcon';
import { ListItemProps } from './ListItem.types';

import alignItemsStyles from '../../../styles/particles-ui/util-classes/align-items.module.scss';
import styles from './ListItem.module.scss';

export type { ListItemProps };

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
        alignItemsStyles[alignItems],
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
      {...props}
    >
      {inset && <ListItemIcon />}
      {children}
    </li>
  );
});

export default ListItem;
