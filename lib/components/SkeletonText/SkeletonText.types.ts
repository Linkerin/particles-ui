import {
  PuiAlignItems,
  PuiFlexDirection,
  PuiJustifyContent,
  PuiSize
} from '../../lib/types';
import { SkeletonProps } from '../Skeleton/Skeleton.types';

export interface SkeletonTextProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  /**
   * `align-items` of Skeletons' container
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items | MDN | align-items - CSS}
   */
  alignItems?: PuiAlignItems;
  /**
   * `flex-direction` of Skeletons' container
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction | MDN | flex-direction - CSS}
   */
  flexDirection?: PuiFlexDirection;
  /**
   * `justify-content` of Skeletons' container
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content | MDN | justify-content - CSS}
   */
  justifyContent?: PuiJustifyContent;
  /**
   * Flexbox `gap` value
   */
  gap?: PuiSize;
  /**
   * Number of `Skeleton` elements
   */
  noOfLines?: number;
  /**
   * Same props for every `Skeleton` element
   */
  skeletonProps?: SkeletonProps;
}
