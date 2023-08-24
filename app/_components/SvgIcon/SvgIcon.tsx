import { forwardRef } from 'react';

export interface SvgIconProps {
  className?: string;
  color?: React.SVGAttributes<SVGSVGElement>['color'];
  id: string;
  role?: React.AriaRole;
  size?: string | number;
  src: any;
}
/**
 * SvgIcon component: wrapper around static imported SVG elements.
 * Default `size` is `1em`.
 * @see {@link https://particles.snipshot.dev/docs/components/svg-icon | Particles UI | SvgIcon}
 */
const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(
  { className, color, src, id, role = 'presentation', size = '1em' },
  ref
) {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      aria-hidden={true}
      role={role}
      className={className}
      color={color}
    >
      <use href={`${src.src}#${id}`} />
    </svg>
  );
});

export default SvgIcon;
