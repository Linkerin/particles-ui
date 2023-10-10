import {
  PuiAlignItems,
  PuiFlexDirection,
  PuiJustifyContent,
  PuiSize
} from '../../lib/types';
import { SkeletonProps } from '../Skeleton/Skeleton.types';

export type SkeletonTextProps = PuiAlignItems &
  PuiFlexDirection &
  PuiJustifyContent &
  Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> & {
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
  };
