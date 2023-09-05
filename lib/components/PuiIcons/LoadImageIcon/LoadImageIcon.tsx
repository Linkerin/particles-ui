import LoadImageSvg from './load-image.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function LoadImageIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={LoadImageSvg} id="load-image" {...props} />;
}

export default LoadImageIcon;
