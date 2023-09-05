import { forwardRef, lazy, Suspense } from 'react';
import classNames from 'classnames';

import { IconFallbackProps } from './IconFallback.types';

import styles from './IconFallback.module.scss';

const NoImageIcon = lazy(
  () => import('../../PuiIcons/NoImageIcon/NoImageIcon')
);
const LoadImageIcon = lazy(
  () => import('../../PuiIcons/LoadImageIcon/LoadImageIcon')
);

export type { IconFallbackProps };

/**
 * Fallback element for an `Image` component with loading and error icons.
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const IconFallback = forwardRef<HTMLSpanElement, IconFallbackProps>(
  function ImageFallback({ className, type, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={classNames(styles['image-fallback'], className)}
        {...props}
      >
        <Suspense>
          {type === 'loading' && <LoadImageIcon strokeWidth={1.3} />}
          {type === 'error' && <NoImageIcon strokeWidth={1.3} />}
        </Suspense>
      </span>
    );
  }
);

export default IconFallback;
