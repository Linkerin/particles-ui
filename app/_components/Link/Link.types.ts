export interface LinkProps<T> extends React.ComponentPropsWithoutRef<'a'> {
  /**
   * HTML element that will be rendered by the component
   */
  as?: T;
  /**
   * Link's font color
   */
  color?: 'primary' | 'inherit';
  /**
   * Sets whether the link leads to an external resource
   */
  isExternal?: boolean;
  /**
   * Do not display an icon for an external link
   */
  noExternalIcon?: boolean;
  /**
   * Use this link for a link overlay
   */
  overlay?: boolean;
  /**
   * Undeline options
   */
  underline?: 'none' | 'hover' | 'always';
}
