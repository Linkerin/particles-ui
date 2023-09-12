import React, { forwardRef } from 'react';
import {
  PolymorphicProps,
  PolymorphicRef
} from '@/lib/lib/polymorphicComponent';

type BoxProps<C extends React.ElementType> = PolymorphicProps<C, {}>;

type BoxComponent = <C extends React.ElementType = 'div'>(
  props: BoxProps<C>
) => React.ReactNode;

const Box: BoxComponent = forwardRef(function Box<C extends React.ElementType>(
  { as, children, ...props }: BoxProps<C>,
  ref?: PolymorphicRef<C>
) {
  const Element = as ?? 'div';

  return (
    <Element ref={ref} {...props}>
      {children}
    </Element>
  );
});

export default Box;
