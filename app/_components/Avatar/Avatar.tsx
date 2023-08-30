'use client';

import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

import { PuiColorNames, PuiRadius, PuiSize } from '@/app/_lib/types';
import { ImgElementProps, SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';
import UserIcon from '../PuiIcons/UserIcon/UserIcon';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Avatar.module.scss';

const generateInitials = (name?: string) => {
  if (!name || typeof name !== 'string') {
    return null;
  }

  const splitted = name.toUpperCase().split(' ');
  const initials = splitted.reduce((acc, currValue) => acc + currValue[0], '');

  return initials.slice(0, 2);
};

type AvatarContentProps =
  | {
      icon?: React.ReactElement;
      iconLabel: React.AriaAttributes['aria-label'];
      src?: undefined;
      alt?: ImgElementProps['alt'];
    }
  | {
      src?: ImgElementProps['src'];
      alt: ImgElementProps['alt'];
      icon?: undefined;
      iconLabel?: undefined;
    };

interface AvatarBaseProps
  extends Omit<ImgElementProps, 'ref' | 'src' | 'alt' | 'onError'> {
  bordered?: boolean;
  color?: PuiColorNames;
  disabled?: boolean;
  fallback?: React.ReactNode;
  icon?: React.ReactElement;
  name?: string;
  noFallback?: boolean;
  onError?: OnErrorEventHandler;
  radius?: PuiRadius;
  size?: PuiSize | 'xxl';
  spanWrapperProps?: SpanElementProps;
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
    crossOrigin,
    src,
    srcSet,
    sizes,
    bordered,
    disabled,
    fallback,
    icon,
    iconLabel,
    name,
    onError,
    onLoad,
    spanWrapperProps,
    color = 'primary',
    loading = 'lazy',
    noFallback = false,
    radius = 'full',
    size = 'md',
    ...props
  },
  ref
) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const initials = useMemo(() => generateInitials(name), [name]);
  const fallbackElement = useMemo(
    () => fallback ?? icon ?? initials ?? <UserIcon aria-label={alt} />,
    [alt, fallback, icon, initials]
  );

  const loadImage = useCallback(() => {
    if (!src || noFallback) return;

    const img = new Image();
    img.src = src;
    img.loading = loading;
    if (crossOrigin) img.crossOrigin = crossOrigin;
    if (srcSet) img.srcset = srcSet;
    if (sizes) img.sizes = sizes;

    img.onload = e => {
      console.log('loaded');
      setImageLoaded(true);
      onLoad?.(e as any);
    };

    if (onError) img.onerror = onError;
  }, [src, srcSet, sizes, noFallback, crossOrigin, loading, onError, onLoad]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    loadImage();
  }, [loadImage]);

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
      {!!src && (noFallback || imageLoaded) ? (
        <img
          alt={alt}
          src={src}
          srcSet={srcSet}
          crossOrigin={crossOrigin}
          sizes={sizes}
          className={classNames(
            { [styles[`radius-${radius}`]]: bordered },
            className
          )}
          loading={loading}
          {...props}
        />
      ) : (
        fallbackElement
      )}
    </span>
  );
});

export default Avatar;
