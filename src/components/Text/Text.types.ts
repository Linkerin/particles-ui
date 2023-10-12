import { PuiAsProp, PuiSize, PuiStyleProp } from '../../lib/types';

type TextCssVars =
  | '--pui-text-color'
  | '--pui-text-font-size'
  | '--pui-text-font-weight'
  | '--pui-text-letter-spacing'
  | '--pui-text-line-height'
  | '--pui-text-text-align';

export interface TextBaseProps extends PuiStyleProp<TextCssVars> {
  /**
   * Font color
   */
  color?:
    | 'on-background'
    | 'on-background-variant'
    | 'on-background-low'
    | 'inherit';
  /**
   * Size value
   */
  size?: Exclude<PuiSize, 'xs'> | 'xxl';
  /**
   * Show ellipsis instead of hidden overflow content
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow | MDN | text-overflow - CSS}
   */
  truncate?: boolean;
  /**
   * Font styling variant
   */
  variant?: 'body' | 'label' | 'inherit';
}

export type TextProps = TextBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLElement>, 'ref'>;
