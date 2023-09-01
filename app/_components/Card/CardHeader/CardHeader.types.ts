import { CardContentProps } from '../Card.types';

export interface CardHeaderProps extends CardContentProps {
  /**
   * Variant of the header's bottom divider
   */
  divider?: 'full' | 'middle' | 'inset';
}
