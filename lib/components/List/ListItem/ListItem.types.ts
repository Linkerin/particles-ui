import { PuiAlignItems } from '../../../lib/types';

export type ListItemProps = PuiAlignItems &
  React.ComponentPropsWithoutRef<'li'> & {
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
  };
