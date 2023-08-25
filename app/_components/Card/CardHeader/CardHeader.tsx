import { forwardRef } from 'react';
import classNames from 'classnames';

import { CardContentProps } from '../Card';

import alignItemsStyles from '../../../styles/particles-ui/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/particles-ui/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/particles-ui/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/particles-ui/util-classes/justify-content.module.scss';
import styles from './CardHeader.module.scss';

export interface CardHeaderProps extends CardContentProps {
  divider?: 'full' | 'middle' | 'inset';
}

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
    ...props
  },
  ref
) {
  return (
    <header
      ref={ref}
      className={classNames(
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
