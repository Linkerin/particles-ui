import { forwardRef } from 'react';
import classNames from 'classnames';

import Skeleton from '../Skeleton/Skeleton';
import { SkeletonTextProps } from './SkeletonText.types';

import alignItemsStyles from '../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../styles/util-classes/justify-content.module.scss';
import styles from './SkeletonText.module.scss';

export type { SkeletonTextProps };

/**
 * Composes `Skeleton` components to mimic a text paragraph.
 * @see {@link https://particles.snipshot.dev/docs/components/skeleton | Particles UI | Skeleton}
 */
const SkeletonText = forwardRef<HTMLDivElement, SkeletonTextProps>(
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
          alignItemsStyles[alignItems],
          flexDirectionStyles[flexDirection],
          justifyContentStyles[justifyContent],
          gapStyles[gap],
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

export default SkeletonText;
