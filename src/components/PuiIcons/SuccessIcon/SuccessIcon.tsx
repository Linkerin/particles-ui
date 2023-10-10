import SuccessSvg from './success.svg';
import { PuiIconProps } from '../PuiIcon.types';
import { SvgIcon } from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as SuccessIconProps };

function SuccessIcon(props: PuiIconProps) {
  return <SvgIcon src={SuccessSvg} id="success" {...props} />;
}

export default SuccessIcon;
