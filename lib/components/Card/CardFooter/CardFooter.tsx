import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../../Box/Box';
import { CardFooterBaseProps, CardFooterProps } from './CardFooter.types';
import { createPolymorphicComponent } from '../../../lib/createPolymorphicComponent';

import alignItemsStyles from '../../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../../styles/util-classes/justify-content.module.scss';
import styles from './CardFooter.module.scss';

export type { CardFooterProps };

const DEFAULT_ELEMENT = 'footer';

const _CardFooter = forwardRef<HTMLElement, CardFooterProps>(
  function _CardFooter(
    {
      children,
      className,
      style,
      divider,
      flexDirection,
      justifyContent,
      as = DEFAULT_ELEMENT,
      alignItems = 'center',
      gap = 'md',
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
      </Box>
    );
  }
);

/**
 * CardFooter component that wraps card's footer. Usually contains action elements.
 * Should be used inside a `Card` component.
 *
 * The component renders as a `footer` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
export const CardFooter = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  CardFooterBaseProps
>(_CardFooter);
