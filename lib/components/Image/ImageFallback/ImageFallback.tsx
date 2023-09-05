import { forwardRef } from 'react';
import classNames from 'classnames';

import { ImageFallbackProps } from './ImageFallback.types';
import NoImageIcon from '../../PuiIcons/NoImageIcon/NoImageIcon';

import styles from './ImageFallback.module.scss';

export type { ImageFallbackProps };

/**
 * Default fallback element for an `Image` component.
 * @see {@link https://particles.snipshot.dev/docs/components/image | Particles UI | Image}
 */
const ImageFallback = forwardRef<HTMLSpanElement, ImageFallbackProps>(
  function ImageFallback({ className, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={classNames(styles['image-fallback'], className)}
        {...props}
      >
        <NoImageIcon />
      </span>
    );
  }
);

export default ImageFallback;
