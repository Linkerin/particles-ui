import React, { forwardRef } from 'react';

/*
It works thanks to Mantine: https://github.com/mantinedev/mantine/blob/master/src/mantine-utils/src/create-polymorphic-component/create-polymorphic-component.ts
and Ohans Emmanuel: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
*/

type PolymorphicRef<C> = C extends React.ElementType
  ? React.ComponentPropsWithRef<C>['ref']
  : never;

type AsProp<C> = {
  as?: C;
};

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = AsProp<C> &
  Props &
  Omit<
    JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>,
    keyof (AsProp<C> & Props)
  >;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

export function createPolymorphicComponent<C extends React.ElementType, Props>(
  component: any
) {
  type PolymorphicComponent = (
    props: PolymorphicComponentPropWithRef<C, Props>
  ) => React.ReactElement;

  return component as PolymorphicComponent;
}

type NewBoxProps = { as?: React.ElementType; children?: React.ReactNode };

const _Box = forwardRef<HTMLDivElement, NewBoxProps>(function _Box(
  { as, children, ...props },
  ref
) {
  const Element = as ?? 'div';

  return (
    <Element ref={ref} {...props}>
      {children}
    </Element>
  );
});

const Box = createPolymorphicComponent<'div', {}>(_Box);
