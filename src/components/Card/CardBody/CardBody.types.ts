import { CardContentProps } from '../Card.types';
import { PuiAsProp } from '../../../lib/types';

export type CardBodyBaseProps = CardContentProps;

export type CardBodyProps = CardContentProps &
  PuiAsProp &
  React.ComponentPropsWithoutRef<'div'>;
