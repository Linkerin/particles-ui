import { forwardRef } from 'react';

import { SkeletonFallbackProps } from './SkeletonFallback.types';

import styles from './SkeletonFallback.module.scss';
import classNames from 'classnames';

export type { SkeletonFallbackProps };

/**
 * Skeleton fallback for `Image` component
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const SkeletonFallback = forwardRef<HTMLSpanElement, SkeletonFallbackProps>(
  function SkeletonFallback(
    { className, color = 'background', ...props },
    ref
  ) {
    return (
      <span
        ref={ref}
        className={classNames(styles.skeleton, styles[color], className)}
        {...props}
      />
    );
  }
);

export default SkeletonFallback;
