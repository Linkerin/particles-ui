import {
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '../../lib/types';

export interface BadgeInlineProps
  extends Omit<
    React.ComponentPropsWithoutRef<'span'>,
    'content' | 'aria-label'
  > {
  'aria-label': Required<React.ComponentProps<'span'>['aria-label']>;
  /**
   * Background color
   */
  color?: PuiColorNames;
  /**
   * Badge content
   */
  content?: string | number | React.ReactNode;
  /**
   * Sets `opacity` to `0` to hide the badge
   */
  invisible?: boolean;
  /**
   * Maximum content's length
   */
  maxChars?: number;
  /**
   * Adds `outline` around the badge
   */
  outlined?: boolean;
  /**
   * Radius value
   */
  radius?: PuiRadius;
  /**
   * Adjusts paddings when the content consists only of 1 element
   */
  singleElement?: boolean;
  /**
   * Size value
   */
  size?: Extract<PuiSize, 'sm' | 'md' | 'lg'> | 'dot';
  /**
   * Styling variant
   */
  variant?: Extract<PuiStyleVariant, 'filled' | 'soft'>;
}
