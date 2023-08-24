import GlobeSvg from '@/public/globe.svg';
import SvgIcon, { SvgIconProps } from '../_components/SvgIcon/SvgIcon';

function GlobeIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={GlobeSvg} id="globe" {...props} />;
}

export default GlobeIcon;
