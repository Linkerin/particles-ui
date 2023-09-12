/*
It works thanks to Mantine: https://github.com/mantinedev/mantine/blob/master/src/mantine-utils/src/create-polymorphic-component/create-polymorphic-component.ts
and Ohans Emmanuel: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
*/

type AsProp<C extends React.ElementType> = {
  as?: C;
};

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;

// export type PolymorphicPropsWithRef<
//   C extends React.ElementType,
//   Props = {}
// > = PolymorphicProps<C, Props> & { ref?: PolymorphicRef<C> };
