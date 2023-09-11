import { ImageProps } from '../Image/Image.types';
import { PuiColorNames, PuiRadius, PuiSize } from '../../lib/types';

type AvatarContentProps =
  | {
      /**
       * Icon element displayed as an avatar.
       * Overrides `fallback` and `fallbackSrc` prop values
       */
      icon?: React.ReactNode | 'default';
      /**
       * Defining `src` is not allowed when `icon` prop is used
       */
      src?: undefined;
      /**
       * Fallback element is not allowed when `icon` prop is used
       */
      fallback?: undefined;
    }
  | {
      /**
       * HTML `<img>` element's `src` attribute value
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes | MDN | img}
       */
      src?: ImageProps['src'];
      /**
       * Fallback React element that is displayed
       * during image loading and in case of errors
       */
      fallback?: ImageProps['fallback'];
      /**
       * Icon element is not allowed when `src` prop is used
       */
      icon?: 'default' | undefined;
    };

interface AvatarBaseProps
  extends Omit<
    ImageProps,
    'alt' | 'src' | 'fallback' | 'fallbackOnError' | 'radius' | 'wrapperRef'
  > {
  /**
   * HTML `<img>` element's `alt` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes | MDN | img}
   */
  alt: ImageProps['alt'];
  /**
   * Sets border of avatar's image wrapper
   */
  bordered?: boolean;
  /**
   * Avatar's color
   */
  color?: PuiColorNames;
  /**
   * Disabled styling
   */
  disabled?: boolean;
  /**
   * Name that is used to generate initials for a fallback
   */
  name?: string;
  /**
   * Border radius value
   */
  radius?: PuiRadius;
  /**
   * Size value
   */
  size?: PuiSize | 'xxl';
}

export type AvatarProps = AvatarBaseProps & AvatarContentProps;
