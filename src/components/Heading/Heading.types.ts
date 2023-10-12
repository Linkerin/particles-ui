import { HEADING_ELEMENTS } from '../../lib/constants';
import { PuiAsProp, PuiStyleProp } from '../../lib/types';

type HeadingCssVars =
  | '--pui-text-color'
  | '--pui-text-font-size'
  | '--pui-text-font-weight'
  | '--pui-text-letter-spacing'
  | '--pui-text-line-height'
  | '--pui-text-text-align';
type HeadingElements = (typeof HEADING_ELEMENTS)[number];

export interface HeadingBaseProps extends PuiStyleProp<HeadingCssVars> {
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

export type HeadingProps = HeadingBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLHeadingElement>, 'ref'>;
