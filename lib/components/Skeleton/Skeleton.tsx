import { forwardRef } from 'react';
import classNames from 'classnames';

import { SkeletonProps, StyleObj } from './Skeleton.types';

import styles from './Skeleton.module.scss';

export type { SkeletonProps };

/**
 * Skeleton component displays a preview of your content while it's loading,
 * or to visualize content that doesn't exist yet.
 *
 * Can wrap content. Consider using `area-busy` attribute for children in that case.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-busy | MDN | aria-busy}
 * @see {@link https://particles.snipshot.dev/docs/components/skeleton | Particles UI | Skeleton}
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  function Skeleton(
    {
      children,
      className,
      animationDuration,
      height,
      width,
      style,
      type,
      animation = 'pulse',
      fadeAnimation = true,
      fitContent = false,
      isLoaded = false,
      radius = 'xs',
      ...props
    },
    ref
  ) {
    let componentRadius = radius;
    switch (type) {
      case 'avatar':
        componentRadius = 'round';
        break;

      case 'image':
        componentRadius = 'xs';
        break;

      case 'button':
        componentRadius = 'md';
        break;

      default:
        break;
    }

    const styleObj: StyleObj = {};
    if (animationDuration) styleObj.animationDuration = animationDuration;
    if (height) styleObj.height = height;
    if (width) styleObj.width = width;

    return (
      <div
        ref={ref}
        className={classNames(
          styles.skeleton,
          { [styles.fit]: fitContent },
          {
            [styles[animation]]: !isLoaded && animation && animation !== 'none'
          },
          { [styles[`${type}`]]: type },
          { [styles.loaded]: isLoaded },
          { [styles['fade-animation']]: fadeAnimation },
          `pui-radius-${componentRadius}`,
          className
        )}
        style={{ ...styleObj, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
