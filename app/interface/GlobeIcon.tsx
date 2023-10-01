import GlobeSvg from '@/public/globe.svg';
import { SvgIcon, SvgIconProps } from '@/src/components/SvgIcon/SvgIcon';

function GlobeIcon(props: Omit<SvgIconProps, 'src' | 'id'>) {
  return <SvgIcon src={GlobeSvg.src} id="globe" {...props} />;
}

export default GlobeIcon;
