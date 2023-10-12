import { COLOR_MODES } from './constants';

export type PuiAlignItems = {
  /**
   * `align-items` property value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items | MDN | align-items - CSS}
   */
  alignItems?: Extract<
    React.CSSProperties['alignItems'],
    'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  >;
};

export type PuiAsProp = {
  /**
   * HTML or React element that will be rendered by the component
   */
  as?: React.ElementType;
};

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

export type PuiFlexDirection = {
  /**
   * `flex-direction` property value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction | MDN | flex-direction - CSS}
   */
  flexDirection?: Extract<
    React.CSSProperties['flexDirection'],
    'column' | 'column-reverse' | 'row' | 'row-reverse'
  >;
};

export type PuiJustifyContent = {
  /**
   * `justify-content` property value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content | MDN | justify-content - CSS}
   */
  justifyContent?: Extract<
    React.CSSProperties['justifyContent'],
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  >;
};

/**
 * Radiuses sizes used as prop value
 */
export type PuiRadius = PuiSize | 'full' | 'round' | 'none';

/**
 * Values that are used as sizes value
 */
export type PuiSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * HTML `style` value with PUI CSS variables support
 * @see {@link https://particles.snipshot.dev/docs/styling | Particles UI | Styling}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style | MDN | style - HTML}
 *
 */
export type PuiStyleProp<T extends string> = {
  style?: Partial<Record<T, string>> & React.CSSProperties;
};

/**
 * Base values for the most 'variant' props
 */
export type PuiStyleVariant = 'filled' | 'outlined' | 'elevated' | 'soft';

/**
 * Recursively makes all the properties of an object `Partial`
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends object | undefined
    ? RecursivePartial<T[P]>
    : Partial<T[P]>;
};
