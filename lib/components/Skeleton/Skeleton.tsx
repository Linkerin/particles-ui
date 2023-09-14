import { forwardRef } from 'react';
import classNames from 'classnames';

import { PuiRadius } from '../../lib/types';

import radiusStyles from '../../styles/util-classes/border-radius.module.scss';
import styles from './Skeleton.module.scss';

export interface SkeletonProps extends React.ComponentPropsWithoutRef<'div'> {
  animation?: 'pulse' | 'wave' | 'none';
  fitContent?: boolean;
  isLoaded?: boolean;
  radius?: PuiRadius;
  speed?: React.CSSProperties['animationDuration'];
  type?: 'avatar' | 'button' | 'image';
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  {
    children,
    className,
    height,
    width,
    speed,
    type,
    animation = 'wave',
    fitContent = false,
    isLoaded = 'false',
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

  return (
    <div
      ref={ref}
      className={classNames(
        styles.skeleton,
        { [styles.fit]: fitContent },
        { [styles[animation]]: animation && animation !== 'none' },
        { [styles[`${type}`]]: type },
        radiusStyles[componentRadius],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Skeleton;
