import { PuiAsProp } from '../../lib/types';

export interface ListBaseProps {
  /**
   * Shrinks the list reducing paddings and font size
   */
  dense?: boolean;
  /**
   * Removes inline padding from list items
   */
  pdInline?: boolean;
}

export type ListProps = ListBaseProps &
  PuiAsProp &
  React.ComponentPropsWithoutRef<'ol'>;
