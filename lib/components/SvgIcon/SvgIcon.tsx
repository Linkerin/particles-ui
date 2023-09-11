import { forwardRef } from 'react';

import { SvgIconProps } from './SvgIcon.types';

export type { SvgIconProps };

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
      <use href={`${src}#${id}`} />
    </svg>
  );
});

export default SvgIcon;
