import WarningSvg from './warning.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function WarningIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={WarningSvg.src} id="warning" {...props} />;
}

export default WarningIcon;
