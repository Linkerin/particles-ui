interface ListComponentProps {
  /**
   * Shrinks the list reducing paddings and font size
   */
  dense?: boolean;
  /**
   * Removes inline padding from list items
   */
  pdInline?: boolean;
}

type ListGenericProps<T extends keyof JSX.IntrinsicElements> = {
  /**
   * HTML element that will be rendered by the component
   */
  as?: T;
} & React.ComponentPropsWithoutRef<T> &
  ListComponentProps;

export type ListProps = ListGenericProps<'ul'> | ListGenericProps<'ol'>;
