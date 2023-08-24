import { forwardRef, lazy, Suspense } from 'react';
import classNames from 'classnames';

import { HrElementProps } from '@/app/_lib/puiHTMLPropTypes';

const DividerSubheader = lazy(
  () => import('./DividerSubheader/DividerSubheader')
);

import styles from './Divider.module.scss';

export interface DividerProps extends HrElementProps {
  orientation?: 'horizontal' | 'vertical';
  subheader?: string;
  subheaderClassName?: string;
  variant?: 'full' | 'inset' | 'middle';
}

/**
 * Divider component that renders as an `<hr>` element.
 * The thematic break element. Can be used horizontally or vertically.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr | MDN | Horizontal Rule}
 * @see {@link https://particles.snipshot.dev/docs/components/divider | Particles UI | Divider}
 */
const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  {
    className,
    style,
    subheader,
    subheaderClassName,
    orientation = 'horizontal',
    variant = 'full',
    ...props
  },
  ref
) {
  return orientation === 'horizontal' &&
    typeof subheader === 'string' &&
    subheader.length > 0 ? (
    <span>
      <hr
        ref={ref}
        aria-orientation={orientation}
        className={classNames(
          styles[orientation],
          { [styles[variant]]: ['inset', 'middle'].includes(variant) },
          className
        )}
        style={style}
        {...props}
      />
      <Suspense fallback={subheader}>
        <DividerSubheader className={subheaderClassName}>
          {subheader}
        </DividerSubheader>
      </Suspense>
    </span>
  ) : (
    <hr
      ref={ref}
      aria-orientation={orientation}
      className={classNames(
        styles[orientation],
        { [styles[variant]]: ['inset', 'middle'].includes(variant) },
        className
      )}
      style={style}
      {...props}
    />
  );
});

export default Divider;
