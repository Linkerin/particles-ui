import { forwardRef, useId } from 'react';
import classNames from 'classnames';

import AlertIcon from './AlertIcon/AlertIcon';
import CloseButton, { CloseButtonProps } from '../CloseButton/CloseButton';
import { HtmlElementProps } from '@/app/_lib/puiHTMLPropTypes';
import { PuiColorNames, PuiRadius, PuiStyleVariant } from '@/app/_lib/types';
import Text, { TextProps } from '../Text/Text';

import radiusStyles from '../../styles/particles-ui/util-classes/border-radius.module.scss';
import styles from './Alert.module.scss';

export interface AlertProps extends Omit<HtmlElementProps, 'ref'> {
  alertTitle?: string | React.ReactNode;
  actionElement?: React.ReactNode;
  closeButtonLabel?: CloseButtonProps['aria-label'];
  color?: PuiColorNames;
  icon?: React.ReactNode;
  onClose?: CloseButtonProps['onClick'];
  radius?: Exclude<PuiRadius, 'round'>;
  textProps?: TextProps;
  titleProps?: TextProps;
  variant?: Exclude<PuiStyleVariant, 'elevated'>;
}

/**
 * Alert component displays a shot message that attracts user's attention.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/alert/ | WAI-ARIA | Alert Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/alert | Particles UI | Button}
 */
const Alert = forwardRef<HTMLElement, AlertProps>(function Alert(
  {
    children,
    className,
    actionElement,
    alertTitle,
    icon,
    onClose,
    textProps,
    titleProps,
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
        styles[variant],
        styles[color],
        radiusStyles[radius],
        { [styles.action]: !!onClose || !!actionElement },
        className
      )}
      aria-labelledby={!!alertTitle ? titleId : undefined}
      aria-describedby={textId}
      role={role}
      {...props}
    >
      <span
        className={classNames(styles['alert-icon'], {
          [styles['with-title']]: !!alertTitle
        })}
      >
        {!!icon ? icon : <AlertIcon type={color} />}
      </span>
      <span className={styles['alert-text']}>
        {!!alertTitle && (
          <Text
            id={titleId}
            as="strong"
            variant="label"
            size="lg"
            truncate
            {...titleProps}
          >
            {alertTitle}
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
