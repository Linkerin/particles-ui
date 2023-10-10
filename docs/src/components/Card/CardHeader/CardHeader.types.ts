import { CardContentProps } from '../Card.types';
import { PuiAsProp } from '../../../lib/types';

export interface CardHeaderBaseProps extends CardContentProps {
  /**
   * Variant of the header's bottom divider
   */
  divider?: 'full' | 'middle' | 'inset';
}

export type CardHeaderProps = CardHeaderBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLElement>, 'ref'>;
