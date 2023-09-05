export interface ImageFallbackProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * Fallback variant
   */
  variant: 'icon-error' | 'icon-loading' | 'skeleton';
}
