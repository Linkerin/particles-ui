'use client';

import { forwardRef, lazy, Suspense, useMemo } from 'react';
import classNames from 'classnames';

import { AvatarProps } from './Avatar.types';
import generateInitials from './generateInitials';
import Image from '../Image/Image';
import type { UserIconProps } from '../PuiIcons/UserIcon/UserIcon';

const UserIcon = lazy(() => import('../PuiIcons/UserIcon/UserIcon'));

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Avatar.module.scss';

export type { AvatarProps };

function SuspensedUserIcon(props: UserIconProps) {
  return (
    <Suspense>
      <UserIcon {...props} />
    </Suspense>
  );
}

/**
 * Avatar component displays user's profile image, initials or fallback icon.
 *
 * Always add `alt` description with `src` provided image
 * and `iconLabel` description with `icon`.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/avatar | Particles UI | Avatar}
 */
const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  {
    className,
    alt,
    src,
    bordered,
    disabled,
    fallback,
    fallbackClassName,
    icon,
    name,
    wrapperClassName,
    color = 'primary',
    radius = 'full',
    size = 'md',
    ...props
  },
  ref
) {
  const initials = useMemo(() => generateInitials(name), [name]);
  const iconElement = useMemo(
    () => (icon === 'default' ? <SuspensedUserIcon /> : icon),
    [icon]
  );
  const fallbackElement = useMemo(
    () => iconElement ?? fallback ?? initials ?? <SuspensedUserIcon />,
    [fallback, initials, iconElement]
  );

  return (
    <Image
      wrapperProps={{ ref }}
      alt={alt}
      wrapperClassName={classNames(
        styles.avatar,
        styles[size],
        radiusStyles[radius],
        { [styles.bordered]: bordered },
        { [styles[color]]: !disabled && color !== 'uncolored' },
        { [styles.disabled]: disabled },
        wrapperClassName
      )}
      aria-disabled={disabled}
      src={!icon ? src : undefined}
      data-pui-component="pui-avatar-img"
      fallback={fallbackElement}
      fallbackClassName={classNames(
        styles['avatar-fallback'],
        fallbackClassName
      )}
      {...props}
    />
  );
});

export default Avatar;
