'use client';

import { forwardRef, useMemo } from 'react';
import classNames from 'classnames';

import generateInitials from './generateInitials';
import { PuiColorNames, PuiRadius, PuiSize } from '../../lib/types';
import UserIcon from '../PuiIcons/UserIcon/UserIcon';
import Image, { ImageProps } from '../Image/Image';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Avatar.module.scss';

type AvatarContentProps =
  | {
      icon?: React.ReactElement;
      iconLabel: React.AriaAttributes['aria-label'];
      src?: undefined;
      alt?: ImageProps['alt'];
    }
  | {
      src?: ImageProps['src'];
      alt: ImageProps['alt'];
      icon?: undefined;
      iconLabel?: undefined;
    };

interface AvatarBaseProps extends Omit<ImageProps, 'radius'> {
  bordered?: boolean;
  color?: PuiColorNames;
  disabled?: boolean;
  name?: string;
  radius?: PuiRadius;
  size?: PuiSize | 'xxl';
  spanWrapperProps?: React.ComponentPropsWithoutRef<'span'>;
}

export type AvatarProps = AvatarBaseProps & AvatarContentProps;

/**
 * Avatar component displays user's profile image, initials or fallback icon.
 *
 * Always add `alt` description with `src` provided image
 * and `iconLabel` description with `icon`.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/avatar | Particles UI | Avatar}
 */
const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    className,
    alt,
    src,
    bordered,
    disabled,
    fallback,
    icon,
    iconLabel,
    name,
    spanWrapperProps,
    color = 'primary',
    radius = 'full',
    size = 'md',
    ...props
  },
  ref
) {
  const initials = useMemo(() => generateInitials(name), [name]);
  const fallbackElement = useMemo(
    () => fallback ?? icon ?? initials ?? <UserIcon aria-label={alt} />,
    [alt, fallback, icon, initials]
  );

  return (
    <span
      ref={ref}
      className={classNames(
        styles.avatar,
        styles[size],
        { [styles[color]]: !disabled && color !== 'uncolored' },
        radiusStyles[radius],
        { [styles.bordered]: bordered },
        { [styles.disabled]: disabled }
      )}
      aria-disabled={disabled}
      aria-label={
        !!icon && !!iconLabel ? iconLabel : !src && name ? name : undefined
      }
      {...spanWrapperProps}
    >
      <Image
        alt={alt}
        src={src}
        className={classNames(
          // { [styles[`radius-${radius}`]]: bordered },
          className
        )}
        data-pui-component="pui-avatar-img"
        fallback={<UserIcon aria-label={alt} />}
        {...props}
      />
      {/* {!!src ? (
        <Image
          alt={alt}
          src={src}
          className={classNames(
            { [styles[`radius-${radius}`]]: bordered },
            className
          )}
          fallback={<UserIcon aria-label={alt} />}
          {...props}
        />
      ) : (
        fallbackElement
      )} */}
    </span>
  );
});

export default Avatar;
