import { forwardRef, lazy, Suspense } from 'react';

import DividerHr, { DividerHrProps } from './DividerHr/DividerHr';

const DividerSubheader = lazy(
  () => import('./DividerSubheader/DividerSubheader')
);

export interface DividerProps extends DividerHrProps {
  subheader?: string;
  subheaderClassName?: string;
  subheaderRef?: React.Ref<HTMLSpanElement>;
}

/**
 * Divider component that renders as an `<hr>` element.
 * The thematic break element. Can be used horizontally or vertically.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr | MDN | Horizontal Rule}
 * @see {@link https://particles.snipshot.dev/docs/components/divider | Particles UI | Divider}
 */
const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  {
    subheader,
    subheaderClassName,
    subheaderRef,
    orientation = 'horizontal',
    ...props
  },
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
        <DividerSubheader ref={subheaderRef} className={subheaderClassName}>
          {subheader}
        </DividerSubheader>
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
