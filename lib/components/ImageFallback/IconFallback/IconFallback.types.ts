export interface IconFallbackProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Variant of the fallback's icon
   */
  type?: 'loading' | 'error';
}
