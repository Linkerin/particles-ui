import InfoSvg from './info.svg';
import { PuiIconProps } from '../PuiIcon.types';
import { SvgIcon } from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as InfoIconProps };

function InfoIcon(props: PuiIconProps) {
  return <SvgIcon src={InfoSvg.src} id="info" {...props} />;
}

export default InfoIcon;
