import { PuiSize } from '@/app/_lib/types';

export interface DualSpinnerProps
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'color'> {
  /**
   * Size value
   */
  size?: PuiSize | 'xxl';
  /**
   * Animation duration
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration | MDN | animation-duration}
   */
  speed?: React.CSSProperties['animationDuration'];
}

export type StyleObj = Pick<
  React.CSSProperties,
  'borderColor' | 'animationDuration'
>;
