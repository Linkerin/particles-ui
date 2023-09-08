import { forwardRef } from 'react';

import { createCompoundComponent } from './compoundComponent';
import { PuiAsProp } from '../../lib/types';

export type BoxProps = PuiAsProp;

const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { as, ...props },
  ref
) {
  const Element = as ?? 'div';

  return <Element ref={ref} {...props} />;
});

export default Box;
