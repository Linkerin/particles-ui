import NoImageSvg from './no-image.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function NoImageIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={NoImageSvg} id="no-image" {...props} />;
}

export default NoImageIcon;
