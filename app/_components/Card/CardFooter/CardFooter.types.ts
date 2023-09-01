import { CardContentProps } from '../Card.types';

export interface CardFooterProps extends CardContentProps {
  /**
   * Variant of the footer's top divider
   */
  divider?: 'full' | 'middle' | 'inset';
}
