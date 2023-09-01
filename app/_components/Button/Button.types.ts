import {
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '@/app/_lib/types';

/**
 * Common props for Button-like components
 */
export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * Button's main color
   */
  color?: PuiColorNames;
  /**
   * Applies loading state styling and behaviour
   */
  isLoading?: boolean;
  /**
   * Do not display a loading spinner in loading state
   */
  noLoadingSpinner?: boolean;
  /**
   * Border radius value
   */
  radius?: PuiRadius;
  /**
   * Size value
   */
  size?: PuiSize;
}

export interface ButtonProps extends ButtonBaseProps {
  /**
   * Shrinks the button reducing paddings
   */
  dense?: boolean;
  /**
   * Icon element on the left
   */
  leftIcon?: React.ReactElement;
  /**
   * Icon element on the right
   */
  rightIcon?: React.ReactElement;
  /**
   * Element that will be displayed in loading state instead of default spinner
   */
  loadingElement?: React.ReactElement;
  /**
   * Button's content that will be displayed in loading state
   */
  loadingText?: string;
  /**
   * Makes the button a bit smaller on press
   */
  shrinkOnPress?: boolean;
  /**
   * Styling variant
   */
  variant?: PuiStyleVariant | 'text';
}
