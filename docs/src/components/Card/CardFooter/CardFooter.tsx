import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../../Box/Box';
import { CardFooterBaseProps, CardFooterProps } from './CardFooter.types';
import { createPolymorphicComponent } from '../../../services/createPolymorphicComponent';

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
          `pui-items-${alignItems}`,
          `pui-gap-${gap}`,
          { [`pui-flex-${flexDirection}`]: !!flexDirection },
          { [`pui-justify-content-${justifyContent}`]: !!justifyContent },
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
