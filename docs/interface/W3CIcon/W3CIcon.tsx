import W3CSvg from './w3c.svg';
import { SvgIcon, SvgIconProps } from '../../../src/components/SvgIcon/SvgIcon';

function W3CIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={W3CSvg.src} id="w3c" {...props} />;
}

export default W3CIcon;
