import { ButtonBaseProps } from '../Button/Button.types';
import { PuiRadius } from '../../lib/types';

export interface FloatingButtonProps
  extends Omit<ButtonBaseProps, 'aria-label' | 'color' | 'size' | 'title'> {
  'aria-label': React.AriaAttributes['aria-label'];
  /**
   * Floating Button's main color
   */
  color?: ButtonBaseProps['color'] | 'background';
  /**
   * Button's content that will be displayed in loading state
   */
  loadingText?: string;
  /**
   * Decreases button's elevation
   */
  lowered?: boolean;
  /**
   * Border radius value
   */
  radius?: PuiRadius;
  /**
   * Size value
   */
  size?: Exclude<ButtonBaseProps['size'], 'xs' | 'xl'>;
  /**
   * HTML `title` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title | MDN | title - HTML}
   */
  title: React.HTMLAttributes<HTMLButtonElement>['title'];
}
