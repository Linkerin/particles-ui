import { PuiRadius } from '../../lib/types';

export type StyleObj = Pick<
  React.CSSProperties,
  'animationDuration' | 'height' | 'width'
>;

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * Animation type
   */
  animation?: 'pulse' | 'wave' | 'none';
  /**
   * Animation duration
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration | MDN | animation-duration}
   */
  animationDuration?: React.CSSProperties['animationDuration'];
  /**
   * Switches fade animation when skeleton's content is loaded
   */
  fadeAnimation?: boolean;
  /**
   * Sets skeleton's `width` and `height` properties to `fit-content`.
   * Makes the skeleton a wrapper.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content | MDN | fit-content}
   */
  fitContent?: boolean;
  /**
   * Switches visibility of the skeleton's content
   */
  isLoaded?: boolean;
  /**
   * Border radius value
   */
  radius?: PuiRadius;
  /**
   * Skeleton appearance type
   */
  type?: 'avatar' | 'button' | 'image';
  /**
   * Element's height value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/height | MDN | height}
   */
  height?: React.CSSProperties['height'];
  /**
   * Element's width value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/width | MDN | width}
   */
  width?: React.CSSProperties['width'];
}
