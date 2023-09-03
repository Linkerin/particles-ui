import UserSvg from './user.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon/SvgIcon';

function UserIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={UserSvg} id="user" {...props} />;
}

export default UserIcon;
