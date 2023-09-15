import { forwardRef, lazy, Suspense } from 'react';
import classNames from 'classnames';

import { ImageIconFallbackProps } from './ImageIconFallback.types';

import styles from './ImageIconFallback.module.scss';

const NoImageIcon = lazy(() => import('../PuiIcons/NoImageIcon/NoImageIcon'));
const LoadImageIcon = lazy(
  () => import('../PuiIcons/LoadImageIcon/LoadImageIcon')
);

export type { ImageIconFallbackProps };

/**
 * Fallback element for an `Image` component with loading and error icons.
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const ImageIconFallback = forwardRef<HTMLDivElement, ImageIconFallbackProps>(
  function ImageFallback(
    { className, icon, color = 'primary', variant = 'filled', ...props },
    ref
  ) {
    return (
      <div
        ref={ref}
        className={classNames(
          styles['image-fallback'],
          styles[variant],
          styles[color],
          className
        )}
        {...props}
      >
        <Suspense>
          {icon === 'loading' && <LoadImageIcon strokeWidth={1.2} />}
          {icon === 'error' && <NoImageIcon strokeWidth={1.2} />}
        </Suspense>
      </div>
    );
  }
);

export default ImageIconFallback;
