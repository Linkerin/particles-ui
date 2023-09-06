import { forwardRef } from 'react';

import IconFallback from './IconFallback/IconFallback';
import { ImageFallbackProps } from './ImageFallback.types';
import SkeletonFallback from './SkeletonFallback/SkeletonFallback';

export type { ImageFallbackProps };

/**
 * Fallback component variants for `Image` component
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const ImageFallback = forwardRef<HTMLSpanElement, ImageFallbackProps>(
  function ImageFallback({ type, ...props }, ref) {
    switch (type) {
      case 'icon-error':
        return <IconFallback ref={ref} icon="error" {...props} />;

      case 'icon-loading':
        return <IconFallback ref={ref} icon="loading" {...props} />;

      case 'skeleton':
        return <SkeletonFallback ref={ref} {...props} />;

      default:
        return null;
    }
  }
);

export default ImageFallback;
