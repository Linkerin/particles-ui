import { PuiColorNames } from '../../../lib/types';

export interface SkeletonFallbackProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Fallback's main color
   */
  color?: Exclude<PuiColorNames, 'uncolored'> | 'background';
}
