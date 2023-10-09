import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../../Box/Box';
import { CardHeaderBaseProps, CardHeaderProps } from './CardHeader.types';
import { createPolymorphicComponent } from '../../../services/createPolymorphicComponent';

import styles from './CardHeader.module.scss';

export type { CardHeaderProps };

const DEFAULT_ELEMENT = 'header';

const _CardHeader = forwardRef<HTMLElement, CardHeaderProps>(
  function _CardHeader(
    {
      children,
      className,
      style,
      divider,
      flexDirection,
      gap,
      justifyContent,
      as = DEFAULT_ELEMENT,
      alignItems = 'center',
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
          styles['card-header'],
          `pui-items-${alignItems}`,
          { [`pui-flex-${flexDirection}`]: !!flexDirection },
          { [`pui-gap-${gap}`]: !!gap },
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
 * CardHeader component that wraps card's header. Should be used inside `Card` component.
 *
 * The component renders as a `header` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
export const CardHeader = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  CardHeaderBaseProps
>(_CardHeader);
