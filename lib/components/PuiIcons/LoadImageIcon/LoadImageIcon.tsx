import LoadImageSvg from './load-image.svg';
import { PuiIconProps } from '../PuiIcon.types';
import SvgIcon from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as LoadImageIconProps };

function LoadImageIcon(props: PuiIconProps) {
  return <SvgIcon src={LoadImageSvg} id="load-image" {...props} />;
}

export default LoadImageIcon;
