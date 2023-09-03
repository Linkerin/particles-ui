import { forwardRef } from 'react';
import classNames from 'classnames';

import { CardFooterProps } from './CardFooter.types';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/util-classes/justify-content.module.scss';
import styles from './CardFooter.module.scss';

export type { CardFooterProps };

/**
 * CardFooter component that wraps card's footer. Usually contains action elements.
 * Should be used inside a `Card` component.
 *
 * The component renders as a `footer` element.
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
const CardFooter = forwardRef<HTMLElement, CardFooterProps>(function CardFooter(
  {
    children,
    className,
    style,
    divider,
    flexDirection,
    justifyContent,
    alignItems = 'center',
    gap = 'md',
    ...props
  },
  ref
) {
  return (
    <footer
      ref={ref}
      className={classNames(
        styles['card-footer'],
        alignItemsStyles[alignItems],
        gapStyles[gap],
        { [flexDirectionStyles[`${flexDirection}`]]: !!flexDirection },
        { [justifyContentStyles[`${justifyContent}`]]: !!justifyContent },
        { [styles[`divider-${divider}`]]: !!divider },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </footer>
  );
});

export default CardFooter;
