import ExternalSvg from './external.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function ExternalIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={ExternalSvg} id="external" {...props} />;
}

export default ExternalIcon;
