import ErrorSvg from './error.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function ErrorIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={ErrorSvg} id="error" {...props} />;
}

export default ErrorIcon;
