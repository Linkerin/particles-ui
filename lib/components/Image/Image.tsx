'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { PuiSize } from '../../lib/types';
import useImageLoadingHandlers from './useImageLoadingHandlers';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Image.module.scss';

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  as?: keyof JSX.IntrinsicElements | React.ReactNode;
  fallback?: React.ReactNode;
  fallbackSrc?: string;
  fallbackOnError?: React.ReactNode;
  fallbackClassName?: string;
  preloadFallbackSrc?: boolean;
  radius?: PuiSize;
  wrapperClassName?: string;
  wrapperRef?: React.ComponentProps<'div'>['ref'];
}
/**
 * Image component with fallback support.
 *
 * For Next.js you can combine the framework's optimized `Image` component
 * with this one providing it into `as` prop.
 * @see {@link https://nextjs.org/docs/app/api-reference/components/image | Next.js | Image}
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  {
    as,
    className,
    alt,
    src,
    fallbackSrc,
    fallbackClassName,
    onError,
    onLoad,
    height,
    width,
    wrapperClassName,
    wrapperRef,
    fallback,
    fallbackOnError = fallback,
    preloadFallbackSrc = true,
    loading = 'lazy',
    radius = 'none',
    ...props
  },
  ref
) {
  const {
    onErrorHandler,
    onLoadHandler,
    showLoadingFallback,
    showErrFallback,
    srcUrl
  } = useImageLoadingHandlers({
    fallback,
    fallbackSrc,
    preloadFallbackSrc,
    src,
    onError,
    onLoad
  });

  return (
    <div
      ref={wrapperRef}
      className={classNames(
        styles.wrapper,
        radiusStyles[radius],
        wrapperClassName
      )}
    >
      {
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={ref}
          className={classNames(radiusStyles[radius], className)}
          alt={alt}
          src={srcUrl}
          height={height}
          width={width}
          loading={loading}
          onError={onErrorHandler}
          onLoad={onLoadHandler}
          {...props}
        />
      }
      {(showLoadingFallback || showErrFallback) && (
        <span
          className={classNames(
            styles.fallback,
            radiusStyles[radius],
            fallbackClassName
          )}
        >
          {showLoadingFallback ? fallback : fallbackOnError}
        </span>
      )}
    </div>
  );
});

export default Image;
