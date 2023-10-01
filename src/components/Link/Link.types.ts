import { PuiAsProp } from '../../lib/types';

export interface LinkBaseProps {
  /**
   * Link's font color
   */
  color?: 'primary' | 'inherit';
  /**
   * Do not display an icon for an external link
   */
  externalIcon?: boolean;
  /**
   * Sets whether the link leads to an external resource
   */
  isExternal?: boolean;
  /**
   * The link with this property set to `true`
   * will be used for a link overlay
   */
  overlay?: boolean;
  /**
   * Undeline options
   */
  underline?: 'none' | 'hover' | 'always';
}

export type LinkProps = LinkBaseProps &
  PuiAsProp &
  React.ComponentPropsWithoutRef<'a'>;
