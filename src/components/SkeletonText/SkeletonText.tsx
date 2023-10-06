import { forwardRef } from 'react';
import classNames from 'classnames';

import { Skeleton } from '../Skeleton/Skeleton';
import { SkeletonTextProps } from './SkeletonText.types';

import styles from './SkeletonText.module.scss';

export type { SkeletonTextProps };

/**
 * Composes `Skeleton` components to mimic a text paragraph.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/skeleton | Particles UI | Skeleton}
 */
export const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(
    {
      className,
      alignItems = 'flex-start',
      flexDirection = 'column',
      justifyContent = 'center',
      gap = 'md',
      noOfLines = 3,
      skeletonProps,
      ...props
    },
    ref
  ) {
    const skeletonsNumber = Array.from(Array(noOfLines).keys());

    return (
      <div
        ref={ref}
        className={classNames(
          styles['skeleton-text'],
          `pui-items-${alignItems}`,
          `pui-flex-${flexDirection}`,
          `pui-justify-content-${justifyContent}`,
          `pui-gap-${gap}`,
          className
        )}
        {...props}
      >
        {skeletonsNumber.map(number => (
          <Skeleton
            key={number}
            data-pui-component="skeleton-text-line"
            {...skeletonProps}
          />
        ))}
      </div>
    );
  }
);
