import { forwardRef } from 'react';
import classNames from 'classnames';

import { Skeleton } from '../Skeleton/Skeleton';
import { ImageSkeletonFallbackProps } from './ImageSkeletonFallback.types';

import styles from './ImageSkeletonFallback.module.scss';

export type { ImageSkeletonFallbackProps };

/**
 * Skeleton fallback for `Image` component
 *
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
export const ImageSkeletonFallback = forwardRef<
  HTMLDivElement,
  ImageSkeletonFallbackProps
>(function ImageSkeletonFallback(
  { className, color = 'background', ...props },
  ref
) {
  return (
    <Skeleton
      ref={ref}
      className={classNames(styles.skeleton, styles[color], className)}
      {...props}
    />
  );
});
