type AsProp<C> = {
  component?: C;
};

type ElementType =
  | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>;

type CompoundComponentProps<C> = C extends ElementType
  ? React.ComponentProps<C> & AsProp<C>
  : AsProp<React.ElementType>;

export function createCompoundComponent<DefaultComponent>(
  component: React.ElementType
) {
  type CompoundComponent = (
    props: React.ComponentProps<typeof component> &
      CompoundComponentProps<DefaultComponent>
  ) => React.ReactElement;

  return component as CompoundComponent;
}
