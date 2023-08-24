import { forwardRef } from 'react';
import classNames from 'classnames';

import { SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';

import styles from './ListItemIcon.module.scss';

export interface ListItemIconProps extends SpanElementProps {}

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
