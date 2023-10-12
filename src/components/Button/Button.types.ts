import {
  PuiAsProp,
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleProp,
  PuiStyleVariant
} from '../../lib/types';

type ButtonColorCssVars =
  | '--pui-btn-color'
  | '--pui-btn-color-channels'
  | '--pui-btn-on-color'
  | '--pui-btn-color-darker'
  | '--pui-btn-color-darker-channels'
  | '--pui-btn-color-container-low'
  | '--pui-btn-on-color-container';

type ButtonSizeCssVars =
  | '--pui-btn-icon-size'
  | '--pui-btn-font-size'
  | '--pui-btn-font-weight'
  | '--pui-btn-line-height'
  | '--pui-btn-letter-spacing';

/**
 * Common props for Button-like components
 */
export interface ButtonCommonProps
  extends PuiStyleProp<ButtonColorCssVars | ButtonSizeCssVars> {
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
