import { PuiColorNames } from '../../lib/types';
import { SkeletonProps } from '../Skeleton/Skeleton.types';

export interface ImageSkeletonFallbackProps extends SkeletonProps {
  /**
   * Fallback's main color
   */
  color?: Exclude<PuiColorNames, 'uncolored'> | 'background';
}
