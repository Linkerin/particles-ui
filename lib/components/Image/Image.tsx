'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { ImageProps } from './Image.types';
import useImageLoadingHandlers from './useImageLoadingHandlers';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Image.module.scss';

export type { ImageProps };

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
    style,
    alt,
    animationDuration,
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
    fadeInAnimation = false,
    fallbackOnError = fallback,
    preloadFallbackSrc = true,
    loading = 'lazy',
    radius = 'none',
    ...props
  },
  ref
) {
  const { onErrorHandler, onLoadHandler, loadingState } =
    useImageLoadingHandlers({
      fallback,
      fallbackSrc,
      preloadFallbackSrc,
      src,
      onError,
      onLoad
    });

  const styleObj: Pick<React.CSSProperties, 'animationDuration'> = {};
  if (animationDuration) styleObj.animationDuration = animationDuration;

  return (
    <div
      ref={wrapperRef}
      className={classNames(
        styles.wrapper,
        radiusStyles[radius],
        wrapperClassName
      )}
    >
      <img
        ref={ref}
        className={classNames(
          { [styles.animation]: fadeInAnimation },
          className
        )}
        style={{ ...style, ...styleObj }}
        alt={alt}
        src={loadingState.src}
        height={height}
        width={width}
        loading={loading}
        onError={onErrorHandler}
        onLoad={onLoadHandler}
        {...props}
      />
      {(loadingState.error || loadingState.loading) && (
        <span className={classNames(styles.fallback, fallbackClassName)}>
          {loadingState.loading ? fallback : fallbackOnError}
        </span>
      )}
    </div>
  );
});

export default Image;
