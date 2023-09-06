import { IconFallbackProps } from './IconFallback/IconFallback.types';

export interface ImageFallbackProps extends IconFallbackProps {
  /**
   * Fallback type
   */
  type: 'icon-error' | 'icon-loading' | 'skeleton';
}
