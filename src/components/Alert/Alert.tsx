import { forwardRef, useId } from 'react';
import classNames from 'classnames';

import { AlertIcon } from './AlertIcon/AlertIcon';
import { AlertProps } from './Alert.types';
import { CloseButton } from '../CloseButton/CloseButton';
import { Text } from '../Text/Text';

import styles from './Alert.module.scss';

export type { AlertProps };

/**
 * Alert component displays a short message that attracts user's attention.
 *
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/alert/ | WAI-ARIA | Alert Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/alert | Particles UI | Alert}
 */
export const Alert = forwardRef<HTMLElement, AlertProps>(function Alert(
  {
    children,
    className,
    actionElement,
    heading,
    onClose,
    textProps,
    headingProps,
    closeButtonLabel = 'Close alert message',
    color = 'success',
    icon = true,
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
        `pui-radius-${radius}`,
        { [styles[variant]]: color !== 'uncolored' },
        { [styles[color]]: color !== 'uncolored' },
        { [styles.action]: !!onClose || !!actionElement },
        className
      )}
      aria-labelledby={heading !== undefined ? titleId : undefined}
      aria-describedby={textId}
      role={role}
      {...props}
    >
      {!!icon && (
        <span
          className={classNames(styles['alert-icon'], {
            [styles['with-heading']]: !!heading
          })}
        >
          {icon === true ? <AlertIcon type={color} /> : icon}
        </span>
      )}
      <span className={styles['alert-text']}>
        {!!heading && (
          <Text
            id={titleId}
            as="strong"
            variant="label"
            size="xl"
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
      {!!actionElement && actionElement}
      {!!onClose && (
        <CloseButton
          aria-label={closeButtonLabel}
          color={color}
          onClick={onClose}
          radius="round"
          size="xs"
        />
      )}
    </section>
  );
});
