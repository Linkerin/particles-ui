import { ButtonCommonProps } from '../Button/Button.types';
import { PuiAsProp, PuiRadius } from '../../lib/types';

export interface FloatingButtonBaseProps
  extends Omit<ButtonCommonProps, 'color' | 'size'> {
  /**
   * HTML `aria-label` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label | MDN | aria-label}
   */
  'aria-label': React.AriaAttributes['aria-label'];
  /**
   * Floating Button's main color
   */
  color?: ButtonCommonProps['color'] | 'background';
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
  size?: Exclude<ButtonCommonProps['size'], 'xs' | 'xl'>;
  /**
   * HTML `title` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title | MDN | title - HTML}
   */
  title: React.HTMLAttributes<HTMLButtonElement>['title'];
}

export type FloatingButtonProps = FloatingButtonBaseProps &
  PuiAsProp &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'aria-label' | 'title'>;
