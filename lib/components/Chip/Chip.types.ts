import {
  PuiAsProp,
  PuiColorNames,
  PuiRadius,
  PuiSize,
  PuiStyleVariant
} from '../../lib/types';

export interface ChipBaseProps {
  /**
   * Disabled styling and behaviour
   */
  disabled?: boolean;
  /**
   * Chip's main color
   */
  color?: PuiColorNames;
  /**
   * Apply the styles like the chip is clickable
   */
  interactiveStyle?: boolean;
  /**
   * Icon element on the left
   */
  leftIcon?: React.ReactElement;
  /**
   * `onClick` handle for the delete button on the right
   */
  onDelete?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Border radius value
   */
  radius?: Exclude<PuiRadius, 'round'>;
  /**
   * Icon element on the right
   */
  rightIcon?: React.ReactElement;
  /**
   * Size value
   */
  size?: PuiSize;
  /**
   * Styling variant
   */
  variant?: PuiStyleVariant;
}

export type ChipProps = ChipBaseProps &
  PuiAsProp &
  React.ComponentPropsWithoutRef<'div'>;
