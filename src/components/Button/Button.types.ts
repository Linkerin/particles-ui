import {
  PuiAsProp,
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '../../lib/types';

/**
 * Common props for Button-like components
 */
export interface ButtonCommonProps {
  /**
   * Button's main color
   */
  color?: PuiColorNames;
  /**
   * Applies loading state styling and behaviour
   */
  isLoading?: boolean;
  /**
   * Element that will be displayed in the loading state instead of a default spinner
   */
  loadingElement?: React.ReactElement;
  /**
   * Disable a loading spinner in the loading state
   */
  loadingSpinner?: boolean;
  /**
   * Border radius value
   */
  radius?: PuiRadius;
  /**
   * Size value
   */
  size?: PuiSize;
}

export interface ButtonBaseProps extends ButtonCommonProps {
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
   * Button's content that will be displayed in loading state
   */
  loadingText?: string;
  /**
   * Adds inset box-shadow imitating button press.
   * Only for `filled` variant.
   */
  shadowOnPress?: boolean;
  /**
   * Makes the button a bit smaller on press
   */
  shrinkOnPress?: boolean;
  /**
   * Styling variant
   */
  variant?: PuiStyleVariant | 'text';
}

export type ButtonProps = ButtonBaseProps &
  PuiAsProp &
  React.ComponentPropsWithoutRef<'button'>;
