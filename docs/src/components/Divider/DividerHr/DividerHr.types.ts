export interface DividerHrProps extends React.ComponentPropsWithoutRef<'hr'> {
  /**
   * Direction of the divider
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Variant of the divider
   */
  variant?: 'full' | 'inset' | 'middle';
}
