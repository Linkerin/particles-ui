import {
  PuiAlignItems,
  PuiAsProp,
  PuiFlexDirection,
  PuiJustifyContent,
  PuiSize
} from '../../lib/types';

export interface CardContentProps {
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
  /**
   * Switches padding of `CardHeader`, `CardBody` and `CardFooter` components
   */
  padding?: boolean;
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

export type CardBaseProps = CardStaticProps & CardActionProps;

export type CardProps = CardBaseProps &
  PuiAsProp &
  Omit<React.HTMLAttributes<HTMLElement>, 'ref'>;
