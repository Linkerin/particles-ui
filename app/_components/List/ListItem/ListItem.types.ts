import { PuiAlignItems } from '@/app/_lib/types';

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  /**
   * Align items value inside list item flexbox
   */
  alignItems?: PuiAlignItems;
  /**
   * Variant of the divider between list items
   */
  divider?: 'full' | 'middle' | 'inset';
  /**
   * The divider's position
   */
  dividerPosition?: 'top' | 'bottom' | 'both';
  /**
   * Creates spare space on the left for a list item without an icon
   *  to align with list items that contain ones
   */
  inset?: boolean;
}
