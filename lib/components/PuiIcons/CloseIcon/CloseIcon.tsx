import CloseSvg from './close.svg';
import { PuiIconProps } from '../PuiIcon.types';
import SvgIcon from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as CloseIconProps };

function CloseIcon(props: PuiIconProps) {
  return <SvgIcon src={CloseSvg.src} id="close" {...props} />;
}

export default CloseIcon;
