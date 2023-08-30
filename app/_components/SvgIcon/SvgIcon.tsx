import { forwardRef } from 'react';

export interface SvgIconProps
  extends Pick<React.ComponentPropsWithRef<'svg'>, 'ref'> {
  className?: React.SVGAttributes<SVGSVGElement>['className'];
  color?: React.SVGAttributes<SVGSVGElement>['color'];
  id: string;
  role?: React.AriaRole;
  size?: string | number;
  src: any;
  strokeWidth?: React.SVGAttributes<SVGSVGElement>['strokeWidth'];
}
/**
 * SvgIcon component: wrapper around static imported SVG elements.
 * Default `size` is `1em`.
 * @see {@link https://particles.snipshot.dev/docs/components/svg-icon | Particles UI | SvgIcon}
 */
const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(
  {
    className,
    color,
    src,
    id,
    role = 'presentation',
    size = '1em',
    strokeWidth = 2
  },
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
      strokeWidth={strokeWidth}
    >
      <use href={`${src.src}#${id}`} />
    </svg>
  );
});

export default SvgIcon;
