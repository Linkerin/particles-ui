import { PuiIconProps } from '../PuiIcon.types';
import SvgIcon from '../../SvgIcon/SvgIcon';
import UserSvg from './user.svg';

export type { PuiIconProps as UserIconProps };

function UserIcon(props: PuiIconProps) {
  return <SvgIcon src={UserSvg} id="user" {...props} />;
}

export default UserIcon;
