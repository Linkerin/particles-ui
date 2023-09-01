import { BadgeInlineProps } from '../BadgeInline/BadgeInline.types';

export interface BadgeProps extends BadgeInlineProps {
  /**
   * Horizontal position (works when `inline` = `false`)
   */
  horizontal?: 'left' | 'right';
  /**
   * Vertical position (works when `inline` = `false`)
   */
  vertical?: 'top' | 'bottom';
  /**
   * Shape of the underlying component
   */
  shape?: 'circle' | 'rectangle';
}
