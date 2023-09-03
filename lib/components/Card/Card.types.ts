import { HtmlElementProps } from '../../lib/puiHTMLPropTypes';
import {
  PuiAlignItems,
  PuiFlexDirection,
  PuiJustifyContent,
  PuiSize
} from '../../lib/types';

export interface CardContentProps extends Omit<HtmlElementProps, 'ref'> {
  /**
   * Card's element content
   */
  children: React.ReactNode;
  /**
   * `align-items` value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items | MDN | align-items - CSS}
   */
  alignItems?: PuiAlignItems;
  /**
   * `flex-direction` value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction | MDN | flex-direction - CSS}
   */
  flexDirection?: PuiFlexDirection;
  /**
   * Flexbox `gap` value
   */
  gap?: PuiSize;
  /**
   * `justify-content` value inside the component
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content | MDN | justify-content - CSS}
   */
  justifyContent?: PuiJustifyContent;
}

interface CardStaticProps extends CardContentProps {
  /**
   * Disabled styling and behaviour
   */
  disabled?: boolean;
  /**
   * Apply the styles like the card is clickable
   */
  interactiveStyle?: boolean;
  /**
   * Size value
   */
  size?: Exclude<PuiSize, 'xs' | 'xl'>;
  /**
   * Styling variant
   */
  variant?: 'filled' | 'outlined' | 'elevated';
  //   onClickCapture?: React.MouseEventHandler<HTMLElement>;
  //   onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
}

type CardActionProps =
  | {
      onClick?: undefined;
      'aria-label'?: React.AriaAttributes['aria-label'];
    }
  | {
      onClick: React.MouseEventHandler<HTMLElement>;
      'aria-label': React.AriaAttributes['aria-label'];
    };

export type CardProps = CardStaticProps & CardActionProps;
