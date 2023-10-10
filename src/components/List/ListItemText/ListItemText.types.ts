import { TextProps } from '../../Text/Text.types';

export interface ListItemTextProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  /**
   * Main (headline) text
   */
  primary?: TextProps['children'];
  /**
   * HTML element that will be rendered by the component
   */
  primaryAs?: TextProps['as'];
  /**
   * Main text props from `Text` component
   */
  primaryProps?: Omit<TextProps, 'as' | 'children' | 'ref'>;
  /**
   * Secondary (supporting) text
   */
  secondary?: TextProps['children'];
  /**
   * HTML element that will be rendered by the component
   */
  secondaryAs?: TextProps['as'];
  /**
   * Secondary text props from `Text` component
   */
  secondaryProps?: Omit<TextProps, 'as' | 'children' | 'ref'>;
}
