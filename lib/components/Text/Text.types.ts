import { PuiAsProp, PuiSize } from '../../lib/types';

export interface TextBaseProps {
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

export type TextProps = TextBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLElement>, 'ref'>;
