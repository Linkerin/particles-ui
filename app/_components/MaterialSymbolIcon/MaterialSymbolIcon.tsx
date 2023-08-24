import { forwardRef } from 'react';
import classNames from 'classnames';

import { SpanElementProps } from '@/app/_lib/puiHTMLPropTypes';

function parseIcon(icon?: string) {
  if (!icon) return null;

  const parsed = Number.parseInt(icon, 16);
  if (Number.isNaN(parsed)) {
    return icon;
  }
  return String.fromCharCode(parsed);
}

type IconProp =
  | { icon: string; code?: undefined }
  | { icon?: undefined; code: string };

type MaterialSymbolIconProps = IconProp & Omit<SpanElementProps, 'children'>;

/**
 * Material Symbol component is a wrapper for Material Symbols font.
 * @see {@link https://fonts.google.com/icons | Google Fonts | Material Symbols and Icons}
 * @see {@link https://particles.snipshot.dev/docs/components/svg-icon | Particles UI | SvgIcon}
 */
const MaterialSymbolIcon = forwardRef<HTMLSpanElement, MaterialSymbolIconProps>(
  function MaterialSymbolIcon(
    { className, icon, code, role = 'presentation', ...props },
    ref
  ) {
    const codeIcon = parseIcon(code);

    return (
      <span
        ref={ref}
        className={classNames('material-symbol', className)}
        data-pui-component="material-icon"
        aria-hidden={true}
        role={role}
        {...props}
      >
        {icon ?? codeIcon}
      </span>
    );
  }
);

export default MaterialSymbolIcon;
