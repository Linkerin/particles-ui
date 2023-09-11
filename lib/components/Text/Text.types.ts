import { PuiSize } from '../../lib/types';

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'ref'> {
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
    | 'blockquote'
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
  color?:
    | 'on-background'
    | 'on-background-variant'
    | 'on-background-low'
    | 'inherit';
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
