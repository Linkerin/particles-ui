import { PuiRadius } from '../../lib/types';

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {
  /**
   * Element that will be rendered as image component
   */
  as?: keyof JSX.IntrinsicElements | React.ReactNode;
  /**
   * The duration of the fade-in animation
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration | MDN | animation-duration}
   */
  animationDuration?: React.CSSProperties['animationDuration'];
  /**
   * Show fade-in animation on initial image load
   */
  fadeInAnimation?: boolean;
  /**
   * Fallback React element that is displayed during image loading.
   * If `fallbackOnError` is not specified,
   * this fallback will be also used in case of errors
   */
  fallback?: React.ReactNode;
  /**
   * URL to the fallback image. It's displayed during `src` image loading,
   * in case of load error and if `src` was not provided.
   *
   * Overrides `fallbackOnError` value. If used with `fallback`,
   * then the fallback will be displayed until `fallbackSrc` is loaded
   */
  fallbackSrc?: string;
  /**
   * Fallback React element that will be displayed in case of errors
   */
  fallbackOnError?: React.ReactNode;
  /**
   * Fallbacks' wrapper `class` attribute
   */
  fallbackClassName?: string;
  /**
   * Specifies whether the image from `fallbackSrc` prop
   * should be loaded upfront or after the image from `src`
   */
  preloadFallbackSrc?: boolean;
  /**
   * Border radius size
   */
  radius?: PuiRadius;
  /**
   * Image wrapper `class` attribute
   */
  wrapperClassName?: string;
  /**
   * Image wrapper props
   */
  wrapperProps?: Omit<React.ComponentProps<'div'>, 'className'>;
}
