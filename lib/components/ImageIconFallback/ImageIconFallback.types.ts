import { PuiColorNames, PuiStyleVariant } from '../../lib/types';

export interface ImageIconFallbackProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Fallback's main color
   */
  color?: Exclude<PuiColorNames, 'uncolored'> | 'background';
  /**
   * Variant of the fallback's icon
   */
  icon?: 'loading' | 'error';
  /**
   * Styling variant
   */
  variant?: Extract<PuiStyleVariant, 'filled' | 'outlined'>;
}
