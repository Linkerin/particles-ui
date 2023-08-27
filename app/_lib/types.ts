import { ButtonElementProps } from './puiHTMLPropTypes';
import { COLOR_MODES } from './constants';

/**
 * Common props for Buttom-like components
 */
export interface ButtonBaseProps extends ButtonElementProps {
  color?: PuiColorNames;
  isLoading?: boolean;
  noLoadingSpinner?: boolean;
  radius?: PuiRadius;
  size?: PuiSize;
}

/**
 * Theme color mode values type
 */
export type PuiColorMode = (typeof COLOR_MODES)[number];

/**
 * Main color values used as props
 */
export type PuiColorNames =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | 'uncolored';

/**
 * 'alignItems' prop type
 */
export type PuiAlignItems = Extract<
  React.CSSProperties['alignItems'],
  'center' | 'flex-start' | 'flex-end' | 'stretch'
>;

/**
 * 'flexDirection' prop type
 */
export type PuiFlexDirection = Extract<
  React.CSSProperties['flexDirection'],
  'column' | 'column-reverse' | 'row' | 'row-reverse'
>;

/**
 * 'justifyContent' prop type
 */
export type PuiJustifyContent = Extract<
  React.CSSProperties['justifyContent'],
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
>;

/**
 * Radiuses sizes used as prop value
 */
export type PuiRadius = PuiSize | 'full' | 'round' | 'none';

/**
 * Values that are used as sizes value
 */
export type PuiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Base values for the most 'variant' props
 */
export type PuiStyleVariant = 'filled' | 'outlined' | 'elevated' | 'soft';
