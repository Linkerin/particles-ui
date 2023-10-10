import { PuiIconProps } from '../PuiIcon.types';
import { SvgIcon } from '../../SvgIcon/SvgIcon';
import WarningSvg from './warning.svg';

export type { PuiIconProps as WarningIconProps };

function WarningIcon(props: PuiIconProps) {
  return <SvgIcon src={WarningSvg} id="warning" {...props} />;
}

export default WarningIcon;
