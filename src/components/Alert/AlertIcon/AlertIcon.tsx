import ErrorIcon from '../../PuiIcons/ErrorIcon/ErrorIcon';
import InfoIcon from '../../PuiIcons/InfoIcon/InfoIcon';
import SuccessIcon from '../../PuiIcons/SuccessIcon/SuccessIcon';
import { SvgIconProps } from '../../SvgIcon/SvgIcon';
import WarningIcon from '../../PuiIcons/WarningIcon/WarningIcon';

export interface AlertIconProps extends Omit<SvgIconProps, 'src' | 'id'> {
  type?: 'success' | 'info' | 'warning' | 'error' | string;
}

/**
 * An information icon that is used inside the `Alert` component.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/alert | Particles UI | Button}
 */
export function AlertIcon({ type = 'info', ...props }: AlertIconProps) {
  switch (type) {
    case 'success':
      return <SuccessIcon {...props} />;

    case 'info':
      return <InfoIcon {...props} />;

    case 'warning':
      return <WarningIcon {...props} />;

    case 'error':
      return <ErrorIcon {...props} />;

    default:
      return <InfoIcon {...props} />;
  }
}
