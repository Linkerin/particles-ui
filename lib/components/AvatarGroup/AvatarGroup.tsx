import { forwardRef } from 'react';
import classNames from 'classnames';

import Avatar from '../Avatar/Avatar';
import { AvatarGroupProps } from './AvatarGroup.types';

import styles from './AvatarGroup.module.scss';

export type { AvatarGroupProps };

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(
    {
      children,
      className,
      max,
      counterAvatarProps,
      direction = 'ltr',
      ...props
    },
    ref
  ) {
    let numOfChildren = null;
    let overload = 0;
    const childrenIsArray = Array.isArray(children);

    if (typeof max === 'number' && childrenIsArray) {
      numOfChildren = children.length;
      overload = Math.max(0, numOfChildren - max);
    }

    return (
      <div
        ref={ref}
        className={classNames(styles.group, styles[direction], className)}
        role="group"
        dir={direction}
        {...props}
      >
        {overload > 0 && childrenIsArray && numOfChildren
          ? children.slice(0, numOfChildren - overload)
          : children}
        {overload > 0 && (
          <Avatar
            icon={`+${overload}`}
            alt="Number of hidden avatars"
            {...counterAvatarProps}
          />
        )}
      </div>
    );
  }
);

export default AvatarGroup;
