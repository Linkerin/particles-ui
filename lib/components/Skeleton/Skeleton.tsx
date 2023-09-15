import { forwardRef } from 'react';
import classNames from 'classnames';

import { SkeletonProps, StyleObj } from './Skeleton.types';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Skeleton.module.scss';

export type { SkeletonProps };

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
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
        { [styles[animation]]: !isLoaded && animation && animation !== 'none' },
        { [styles[`${type}`]]: type },
        { [styles.loaded]: isLoaded },
        { [styles['fade-animation']]: fadeAnimation },
        radiusStyles[componentRadius],
        className
      )}
      style={{ ...styleObj, ...style }}
      {...props}
    >
      {children}
    </div>
  );
});

export default Skeleton;
