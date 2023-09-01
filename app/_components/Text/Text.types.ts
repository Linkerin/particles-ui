import { HtmlElementProps } from '@/app/_lib/puiHTMLPropTypes';
import { PuiSize } from '@/app/_lib/types';

export interface TextProps extends Omit<HtmlElementProps, 'ref'> {
  /**
   * HTML element that will be rendered by the component
   */
  as?:
    | 'p'
    | 'span'
    | 'strong'
    | 'b'
    | 'i'
    | 'u'
    | 'abbr'
    | 'cite'
    | 'code'
    | 'del'
    | 'em'
    | 'ins'
    | 'kbd'
    | 'mark'
    | 's'
    | 'samp'
    | 'sub'
    | 'sup';
  /**
   * Font color
   */
  color?: 'on-background' | 'on-background-variant' | 'inherit';
  /**
   * Size value
   */
  size?: Exclude<PuiSize, 'xs'>;
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
