import { CardContentProps } from '../Card.types';

export type CardBodyProps = CardContentProps &
  React.ComponentPropsWithoutRef<'div'>;
