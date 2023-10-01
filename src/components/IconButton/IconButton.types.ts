import { ButtonCommonProps } from '../Button/Button.types';
import { PuiAsProp, PuiStyleVariant } from '../../lib/types';

export interface IconButtonBaseProps extends ButtonCommonProps {
  /**
   * HTML `aria-label` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label | MDN | aria-label}
   */
  'aria-label': React.AriaAttributes['aria-label'];
  /**
   * Button's icon content
   */
  icon: React.ReactElement;
  /**
   * Style variant
   */
  variant?: PuiStyleVariant | 'standard';
}

export type IconButtonProps = IconButtonBaseProps &
  PuiAsProp &
  Omit<React.ComponentPropsWithoutRef<'button'>, 'children' | 'aria-label'>;
