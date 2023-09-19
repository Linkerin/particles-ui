import {
  PuiAlignItems,
  PuiAsProp,
  PuiFlexDirection,
  PuiJustifyContent,
  PuiSize
} from '../../lib/types';

export type CardContentProps = PuiAlignItems &
  PuiFlexDirection &
  PuiJustifyContent & {
    /**
     * Card's element content
     */
    children: React.ReactNode;
    /**
     * Flexbox `gap` value
     */
    gap?: PuiSize;
    /**
     * Switches padding of `CardHeader`, `CardBody` and `CardFooter` components
     */
    padding?: boolean;
  };

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
