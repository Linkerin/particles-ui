import { forwardRef, lazy, Suspense } from 'react';

import DividerHr from './DividerHr/DividerHr';
import { DividerProps } from './Divider.types';

const DividerSubheader = lazy(
  () => import('./DividerSubheader/DividerSubheader')
);

export type { DividerProps };

/**
 * Divider component that renders as an `<hr>` element.
 * The thematic break element. Can be used horizontally or vertically.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr | MDN | Horizontal Rule}
 * @see {@link https://particles.snipshot.dev/docs/components/divider | Particles UI | Divider}
 */
const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { subheader, subheaderProps, orientation = 'horizontal', ...props },
  ref
) {
  return orientation === 'horizontal' &&
    typeof subheader === 'string' &&
    subheader.length > 0 ? (
    <span>
      <DividerHr
        ref={ref}
        aria-orientation={orientation}
        orientation={orientation}
        {...props}
      />
      <Suspense fallback={subheader}>
        <DividerSubheader {...subheaderProps}>{subheader}</DividerSubheader>
      </Suspense>
    </span>
  ) : (
    <DividerHr
      ref={ref}
      aria-orientation={orientation}
      orientation={orientation}
      {...props}
    />
  );
});

export default Divider;
