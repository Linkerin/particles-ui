import { PuiColorNames, PuiSize } from '../../lib/types';

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  /**
   * Switch color in checked state
   */
  color?: PuiColorNames;
  /**
   * Switch label
   */
  labelElement?: React.ReactNode;
  /**
   * Spacing between switch and label
   */
  labelGap?: PuiSize;
  /**
   * Position of the label
   */
  labelPosition?: 'left' | 'right';
  /**
   * HTML `label` element props
   */
  labelProps?: React.ComponentPropsWithoutRef<'label'>;
  /**
   * Icon that is displayed when the switch is checked
   */
  selectedIcon?: React.ReactNode;
  /**
   * Size value
   */
  size?: Exclude<PuiSize, 'xs'>;
  /**
   * HTML `tabindex` attribute value
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex | MDN | tabindex - HTML}
   */
  tabIndex?: number;
  /**
   * Icon that is displayed when the switch is unchecked
   */
  unselectedIcon?: React.ReactNode;
}
