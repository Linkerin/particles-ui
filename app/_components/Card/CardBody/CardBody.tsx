import { forwardRef } from 'react';
import classNames from 'classnames';

import { CardBodyProps } from './CardBody.types';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/util-classes/justify-content.module.scss';
import styles from './CardBody.module.scss';

export type { CardBodyProps };

/**
 * CardBody component that wraps card's main content.
 * Should be used inside a `Card` component.
 *
 * The component renders as a `div` element.
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(function CardBody(
  {
    children,
    className,
    style,
    gap,
    alignItems = 'flex-start',
    flexDirection = 'column',
    justifyContent = 'center',
    ...props
  },
  ref
) {
  return (
    <div
      ref={ref}
      className={classNames(
        styles['card-body'],
        flexDirectionStyles[flexDirection],
        alignItemsStyles[alignItems],
        justifyContentStyles[`${justifyContent}`],
        { [gapStyles[`${gap}`]]: !!gap },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

export default CardBody;
