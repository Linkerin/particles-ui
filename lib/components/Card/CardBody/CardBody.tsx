import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../../Box/Box';
import { CardBodyBaseProps, CardBodyProps } from './CardBody.types';
import { createPolymorphicComponent } from '../../../lib/createPolymorphicComponent';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/util-classes/justify-content.module.scss';
import styles from './CardBody.module.scss';

export type { CardBodyProps };

const DEFAULT_ELEMENT = 'div';

const _CardBody = forwardRef<HTMLDivElement, CardBodyProps>(function _CardBody(
  {
    children,
    className,
    style,
    gap,
    as = DEFAULT_ELEMENT,
    alignItems = 'flex-start',
    flexDirection = 'column',
    justifyContent = 'center',
    padding = true,
    ...props
  },
  ref
) {
  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        { [styles['no-padding']]: padding === false },
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
    </Box>
  );
});

/**
 * CardBody component that wraps card's main content.
 * Should be used inside a `Card` component.
 *
 * The component renders as a `div` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
export const CardBody = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  CardBodyBaseProps
>(_CardBody);
