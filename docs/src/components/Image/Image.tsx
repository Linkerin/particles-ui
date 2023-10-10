'use client';

import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { ImageBaseProps, ImageProps } from './Image.types';
import useImageLoader from './useImageLoader';

import styles from './Image.module.scss';

export type { ImageProps };

const DEFAULT_ELEMENT = 'img';

const _Image = forwardRef<HTMLImageElement, ImageProps>(function _Image(
  {
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
    as = DEFAULT_ELEMENT,
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
        { [`pui-radius-${radius}`]: radius },
        wrapperClassName
      )}
      {...wrapperProps}
    >
      <Box
        ref={ref}
        as={as}
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

/**
 * Image component with fallback support.
 *
 * For Next.js you can combine the framework's optimized `Image` component
 * with this one providing it into `as` prop.
 *
 * @see {@link https://nextjs.org/docs/app/api-reference/components/image | Next.js | Image}
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
export const Image = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  ImageBaseProps
>(_Image);
