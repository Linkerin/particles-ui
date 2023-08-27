import CloseSvg from './close.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function CloseIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={CloseSvg} id="close" {...props} />;
}

export default CloseIcon;
