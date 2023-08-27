import InfoSvg from './info.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function InfoIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={InfoSvg} id="info" {...props} />;
}

export default InfoIcon;
