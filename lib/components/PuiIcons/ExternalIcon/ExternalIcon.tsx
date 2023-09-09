import ExternalSvg from './external.svg';
import { PuiIconProps } from '../PuiIcon.types';
import SvgIcon from '../../SvgIcon/SvgIcon';

export type { PuiIconProps as ExternalIconProps };

function ExternalIcon(props: PuiIconProps) {
  return <SvgIcon src={ExternalSvg.src} id="external" {...props} />;
}

export default ExternalIcon;
