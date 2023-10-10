/*
It works thanks to Mantine: https://github.com/mantinedev/mantine/blob/master/src/mantine-utils/src/create-polymorphic-component/create-polymorphic-component.ts
and Ohans Emmanuel: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
*/

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];

type AsProp<C> = {
  as?: C;
};

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object
> = AsProp<C> &
  Props &
  Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProp<C> & Props)>;

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = object
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

/**
 * Returns a component with proper typing for polymorphic components
 * @param component React polymorphic component
 */
export function createPolymorphicComponent<
  DefaultElement extends React.ElementType,
  Props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(component: React.ComponentType<any>) {
  type PolymorphicComponent = <C extends React.ElementType = DefaultElement>(
    props: PolymorphicComponentPropsWithRef<C, Props>
  ) => React.ReactElement;

  return component as PolymorphicComponent;
}
