import NoImageSvg from './no-image.svg';
import { PuiIconProps } from '../PuiIcon.types';
import SvgIcon from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as NoImageIconProps };

function NoImageIcon(props: PuiIconProps) {
  return <SvgIcon src={NoImageSvg} id="no-image" {...props} />;
}

export default NoImageIcon;
