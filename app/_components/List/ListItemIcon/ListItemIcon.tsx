import { forwardRef } from 'react';
import classNames from 'classnames';

import { ListItemIconProps } from './ListItemIcon.types';

import styles from './ListItemIcon.module.scss';

export type { ListItemIconProps };

/**
 * ListItemIcon component is a wrapper around icon components
 * for proper use inside a `List` component.
 * @see {@link https://particles.snipshot.dev/docs/components/list | Particles UI | List}
 */
const ListItemIcon = forwardRef<HTMLSpanElement, ListItemIconProps>(
  function ListItemIcon({ children, className, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={classNames(styles['list-item-icon'], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

export default ListItemIcon;
