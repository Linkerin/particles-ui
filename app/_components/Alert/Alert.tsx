import { forwardRef, useId } from 'react';
import classNames from 'classnames';

import AlertIcon from './AlertIcon/AlertIcon';
import CloseButton, { CloseButtonProps } from '../CloseButton/CloseButton';
import { PuiColorNames, PuiRadius, PuiStyleVariant } from '../../_lib/types';
import Text, { TextProps } from '../Text/Text';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Alert.module.scss';

export interface AlertProps extends React.ComponentPropsWithoutRef<'section'> {
  /**
   * Alert's message heading
   */
  heading?: string | React.ReactNode;
  /**
   * Interactive component on the right
   */
  actionElement?: React.ReactNode;
  /**
   * `aria-label` value for a close button
   */
  closeButtonLabel?: CloseButtonProps['aria-label'];
  /**
   * Alert's main color
   */
  color?: PuiColorNames;
  /**
   * Icon component on the left
   */
  icon?: React.ReactNode;
  /**
   * `onClick` handler for a close button
   */
  onClose?: CloseButtonProps['onClick'];
  /**
   * Radius value
   */
  radius?: Exclude<PuiRadius, 'round'>;
  /**
   * `Text` properties for alert's message component
   */
  textProps?: TextProps;
  /**
   * `Text` properties for alert's heading component
   */
  headingProps?: TextProps;
  /**
   * Styling variant
   */
  variant?: Exclude<PuiStyleVariant, 'elevated'> | 'minimal';
}

/**
 * Alert component displays a shot message that attracts user's attention.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/alert/ | WAI-ARIA | Alert Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/alert | Particles UI | Alert}
 */
const Alert = forwardRef<HTMLElement, AlertProps>(function Alert(
  {
    children,
    className,
    actionElement,
    heading,
    icon,
    onClose,
    textProps,
    headingProps,
    closeButtonLabel = 'Close alert',
    color = 'success',
    radius = 'sm',
    role = 'alert',
    variant = 'soft',
    ...props
  },
  ref
) {
  const titleId = useId();
  const textId = useId();

  return (
    <section
      ref={ref}
      className={classNames(
        styles.alert,
        radiusStyles[radius],
        { [styles[variant]]: color !== 'uncolored' },
        { [styles[color]]: color !== 'uncolored' },
        { [styles.action]: !!onClose || !!actionElement },
        className
      )}
      aria-labelledby={!!heading ? titleId : undefined}
      aria-describedby={textId}
      role={role}
      {...props}
    >
      <span
        className={classNames(styles['alert-icon'], {
          [styles['with-heading']]: !!heading
        })}
      >
        {!!icon ? icon : <AlertIcon type={color} />}
      </span>
      <span className={styles['alert-text']}>
        {!!heading && (
          <Text
            id={titleId}
            as="strong"
            variant="label"
            size="lg"
            truncate
            {...headingProps}
          >
            {heading}
          </Text>
        )}
        <Text id={textId} variant="body" size="sm" {...textProps}>
          {children}
        </Text>
      </span>
      {!!onClose && !actionElement && (
        <CloseButton
          aria-label={closeButtonLabel}
          color={color}
          onClick={onClose}
          radius="round"
          size="xs"
        />
      )}
      {!!actionElement && actionElement}
    </section>
  );
});

export default Alert;
