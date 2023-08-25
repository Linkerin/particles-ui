import { ButtonElementProps } from './puiHTMLPropTypes';
import { COLOR_MODES } from './constants';

export interface ButtonBaseProps extends ButtonElementProps {
  color?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
  noLoadingSpinner?: boolean;
  radius?: Radius;
  size?: SizesType;
}

export type SizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PuiAlignItems = Extract<
  React.CSSProperties['alignItems'],
  'center' | 'flex-start' | 'flex-end' | 'stretch'
>;

export type PuiFlexDirection = Extract<
  React.CSSProperties['flexDirection'],
  'column' | 'column-reverse' | 'row' | 'row-reverse'
>;

export type PuiJustifyContent = Extract<
  React.CSSProperties['justifyContent'],
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
>;

export type Radius = SizesType | 'full' | 'round' | 'none';

export type ColorModeType = (typeof COLOR_MODES)[number];

export type ColorTokensType =
  | 'primary'
  | 'primary-container'
  | 'on-primary'
  | 'on-primary-container'
  | 'secondary'
  | 'secondary-container'
  | 'on-secondary'
  | 'on-secondary-container'
  | 'tertiary'
  | 'tertiary-container'
  | 'on-tertiary'
  | 'on-tertiaty-container'
  | 'background'
  | 'background-dim'
  | 'background-bright'
  | 'background-container-lowest'
  | 'background-container-low'
  | 'background-container'
  | 'background-container-high'
  | 'background-container-highest'
  | 'background-variant'
  | 'on-background-variant'
  | 'on-background'
  | 'outline'
  | 'outline-variant';

export type TypographyColorsType =
  | 'on-background'
  | 'on-background-variant'
  | 'on-primary'
  | 'on-primary-container'
  | 'on-secondary'
  | 'on-secondary-container'
  | 'on-tertiary'
  | 'on-tertiary-container';
