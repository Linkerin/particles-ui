import { CardContentProps } from '../Card.types';
import { PuiAsProp } from '../../../lib/types';

export interface CardFooterBaseProps extends CardContentProps {
  /**
   * Variant of the footer's top divider
   */
  divider?: 'full' | 'middle' | 'inset';
}

export type CardFooterProps = CardFooterBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLElement>, 'ref'>;
