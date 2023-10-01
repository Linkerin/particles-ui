import { forwardRef } from 'react';

import { BoxProps } from './Box.types';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';

export type { BoxProps };

const DEFAULT_ELEMENT: React.ElementType = 'div';

const _Box = forwardRef<HTMLDivElement, BoxProps>(function _Box(
  { as: Element = DEFAULT_ELEMENT, children, ...props },
  ref
) {
  return (
    <Element ref={ref} {...props}>
      {children}
    </Element>
  );
});

/**
 * Base polymorphic component.
 * By default, renders as `div` element
 */
export const Box = createPolymorphicComponent<typeof DEFAULT_ELEMENT, {}>(_Box);
