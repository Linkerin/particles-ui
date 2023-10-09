import ErrorSvg from './error.svg';
import { PuiIconProps } from '../PuiIcon.types';
import { SvgIcon } from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as ErrorIconProps };

function ErrorIcon(props: PuiIconProps) {
  return <SvgIcon src={ErrorSvg} id="error" {...props} />;
}

export default ErrorIcon;
