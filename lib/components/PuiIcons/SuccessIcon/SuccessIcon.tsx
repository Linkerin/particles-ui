import SuccessSvg from './success.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function SuccessIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={SuccessSvg} id="success" {...props} />;
}

export default SuccessIcon;
