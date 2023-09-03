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
