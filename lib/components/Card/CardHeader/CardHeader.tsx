import { forwardRef } from 'react';
import classNames from 'classnames';

import { CardHeaderProps } from './CardHeader.types';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/util-classes/justify-content.module.scss';
import styles from './CardHeader.module.scss';

export type { CardHeaderProps };

/**
 * CardHeader component that wraps card's header. Should be used inside `Card` component.
 *
 * The component renders as a `header` element.
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(function CardHeader(
  {
    children,
    className,
    style,
    divider,
    flexDirection,
    gap,
    justifyContent,
    alignItems = 'center',
    padding = true,
    ...props
  },
  ref
) {
  return (
    <header
      ref={ref}
      className={classNames(
        { [styles['no-padding']]: padding === false },
        styles['card-header'],
        alignItemsStyles[alignItems],
        { [flexDirectionStyles[`${flexDirection}`]]: !!flexDirection },
        { [gapStyles[`${gap}`]]: !!gap },
        { [justifyContentStyles[`${justifyContent}`]]: !!justifyContent },
        { [styles[`divider-${divider}`]]: !!divider },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </header>
  );
});

export default CardHeader;
