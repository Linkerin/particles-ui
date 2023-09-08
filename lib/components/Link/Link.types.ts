import { PuiComponentProps } from '../../lib/types';

export interface LinkProps extends PuiComponentProps<'a'> {
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
   * Use this link for a link overlay
   */
  overlay?: boolean;
  /**
   * Undeline options
   */
  underline?: 'none' | 'hover' | 'always';
}
