import { ButtonBaseProps } from '../Button/Button.types';
import { PuiStyleVariant } from '../../lib/types';

export interface IconButtonProps
  extends Omit<ButtonBaseProps, 'children' | 'aria-label' | 'ref'> {
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
