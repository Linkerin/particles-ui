import { forwardRef } from 'react';
import classNames from 'classnames';

import { MaterialSymbolIconProps } from './MaterialSymbolIcon.types';
import parseCode from './parseCode';

export type { MaterialSymbolIconProps };

/**
 * Material Symbol component is a wrapper for Material Symbols font.
 *
 * @see {@link https://fonts.google.com/icons | Google Fonts | Material Symbols and Icons}
 * @see {@link https://particles.snipshot.dev/docs/components/svg-icon | Particles UI | SvgIcon}
 */
export const MaterialSymbolIcon = forwardRef<
  HTMLSpanElement,
  MaterialSymbolIconProps
>(function MaterialSymbolIcon(
  { className, icon, code, role = 'presentation', ...props },
  ref
) {
  const codeIcon = parseCode(code);

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
});
