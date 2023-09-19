'use client';

import { forwardRef, lazy, Suspense, useMemo } from 'react';
import classNames from 'classnames';

import { AvatarBaseProps, AvatarProps } from './Avatar.types';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import generateInitials from './generateInitials';
import { Image } from '../Image/Image';
import type { UserIconProps } from '../PuiIcons/UserIcon/UserIcon';

const UserIcon = lazy(() => import('../PuiIcons/UserIcon/UserIcon'));

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Avatar.module.scss';

export type { AvatarProps };

const DEFAULT_ELEMENT = 'img';

function SuspensedUserIcon(props: UserIconProps) {
  return (
    <Suspense>
      <UserIcon {...props} />
    </Suspense>
  );
}

const _Avatar = forwardRef<HTMLDivElement, AvatarProps>(function _Avatar(
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
    as = DEFAULT_ELEMENT,
    color = 'primary',
    radius = 'full',
    size = 'md',
    wrapperProps,
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

  const imageWrapperProps = { 'data-pui-component': 'avatar', ...wrapperProps };

  return (
    <Image
      ref={ref}
      as={as}
      wrapperProps={imageWrapperProps}
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

/**
 * Avatar component displays user's profile image, initials or fallback icon.
 *
 * Always add `alt` description with `src` provided image
 * and `iconLabel` description with `icon`.
 *
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/avatar | Particles UI | Avatar}
 */
export const Avatar = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  AvatarBaseProps
>(_Avatar);
