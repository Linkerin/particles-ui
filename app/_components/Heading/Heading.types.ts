import { HeadingElementProps } from '@/app/_lib/puiHTMLPropTypes';

type HeadingElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HeadingElementProps {
  /**
   * HTML element that will be rendered by the component
   */
  as?: HeadingElements | 'span';
  /**
   * Font color
   */
  color?:
    | 'on-background'
    | 'on-background-variant'
    | 'on-background-low'
    | 'inherit';
  /**
   * Show ellipsis instead of hidden overflow content
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow | MDN | text-overflow - CSS}
   */
  truncate?: boolean;
  /**
   * Font styling variant
   */
  variant?:
    | HeadingElements
    | 'subtitle-lg'
    | 'subtitle-md'
    | 'subtitle-sm'
    | 'inherit';
}
