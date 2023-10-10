import { ListItemProps } from '../ListItem/ListItem.types';

type ListItemInteractiveBaseProps = Omit<
  ListItemProps,
  'ref' | 'role' | 'onClick' | 'onClickCapture' | 'onKeyDown'
> &
  Pick<
    React.ComponentProps<'div'>,
    'onClick' | 'onClickCapture' | 'onKeyDown' | 'role'
  >;

export interface ListItemInteractiveProps extends ListItemInteractiveBaseProps {
  /**
   * Disabled styling and behaviour
   */
  disabled?: boolean;
  /**
   * `ref` attribute of the wrapper `<div`> element
   */
  interactiveDivRef?: React.ComponentProps<'div'>['ref'];
  /**
   * Shows that the list item is selected
   */
  selected?: boolean;
}
