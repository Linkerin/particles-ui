import { CloseButtonProps } from '../CloseButton/CloseButton';
import { PuiColorNames, PuiRadius, PuiStyleVariant } from '../../lib/types';
import { TextProps } from '../Text/Text';

export interface AlertProps extends React.ComponentPropsWithoutRef<'section'> {
  /**
   * Alert's message heading
   */
  heading?: string | React.ReactNode;
  /**
   * Interactive component on the right
   */
  actionElement?: React.ReactNode;
  /**
   * `aria-label` value for a close button
   */
  closeButtonLabel?: CloseButtonProps['aria-label'];
  /**
   * Alert's main color
   */
  color?: PuiColorNames;
  /**
   * Icon component on the left
   */
  icon?: React.ReactNode | boolean;
  /**
   * `onClick` handler for a close button
   */
  onClose?: CloseButtonProps['onClick'];
  /**
   * Border radius value
   */
  radius?: Exclude<PuiRadius, 'round'>;
  /**
   * `Text` properties for alert's message component
   */
  textProps?: TextProps;
  /**
   * `Text` properties for alert's heading component
   */
  headingProps?: TextProps;
  /**
   * Styling variant
   */
  variant?: Exclude<PuiStyleVariant, 'elevated'> | 'minimal';
}
