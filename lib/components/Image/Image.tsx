'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { ImageProps } from './Image.types';
import useImageLoader from './useImageLoader';

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
    fallback,
    fallbackSrc,
    fallbackClassName,
    onError,
    onLoad,
    height,
    width,
    radius,
    wrapperClassName,
    wrapperProps,
    fadeInAnimation = false,
    fallbackOnError = fallback,
    preloadFallbackSrc = true,
    loading = 'lazy',
    ...props
  },
  ref
) {
  const { onErrorHandler, onLoadHandler, loadingState } = useImageLoader({
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
      className={classNames(
        styles.wrapper,
        { [styles.bg]: !fallback && !fallbackOnError },
        { [radiusStyles[`${radius}`]]: radius },
        wrapperClassName
      )}
      {...wrapperProps}
    >
      <img
        ref={ref}
        className={classNames(
          { [styles.animation]: fadeInAnimation },
          { [styles.invisible]: !loadingState.loaded },
          { [styles.visible]: loadingState.loaded },
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
      {(loadingState.error || loadingState.pending) && (
        <span
          className={classNames(styles.fallback, fallbackClassName)}
          role="presentation"
        >
          {loadingState.pending ? fallback : fallbackOnError}
        </span>
      )}
    </div>
  );
});

export default Image;
