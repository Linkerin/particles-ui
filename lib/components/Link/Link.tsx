'use client';

import { createElement, forwardRef, lazy, Suspense } from 'react';
import classNames from 'classnames';
import Box from '../Box/Box';

import { LinkProps } from './Link.types';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';

const ExternalIcon = lazy(
  () => import('../PuiIcons/ExternalIcon/ExternalIcon')
);

import styles from './Link.module.scss';

export type { LinkProps };

/**
 * Link component that wraps an HTML `<a>` element.
 * Could be used with different routing libraries link components via `as` prop.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/link | WAI-ARIA | Link Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/link | Particles UI | Link}
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    children,
    className,
    onBlur,
    onKeyUp,
    rel,
    underline,
    as = 'a',
    color = 'primary',
    externalIcon = true,
    isExternal = false,
    overlay = false,
    target = '_self',
    ...props
  },
  ref
) {
  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({
      onBlur,
      onKeyUp
    });

  return (
    <Box
      as={as}
      ref={ref}
      className={classNames(
        styles.link,
        outlineDefaultClassName,
        { [styles[color]]: !!color && color !== 'inherit' },
        { [styles.external]: isExternal },
        {
          [styles[`underline-${underline}`]]: underline && underline !== 'none'
        },
        className
      )}
      target={isExternal ? '_blank' : target}
      rel={isExternal && !rel ? 'noopener external' : rel}
      data-pui-component={overlay ? 'overlay-link' : 'link'}
      onBlur={onBlurHandler}
      onKeyUp={onKeyUpHandler}
      {...props}
    >
      {children}
      {isExternal && externalIcon && (
        <Suspense>
          <ExternalIcon />
        </Suspense>
      )}
    </Box>
  );

  // return createElement(
  //   as,
  //   {
  //     ref,
  //     className: classNames(
  //       styles.link,
  //       outlineDefaultClassName,
  //       { [styles[color]]: !!color && color !== 'inherit' },
  //       { [styles.external]: isExternal },
  //       {
  //         [styles[`underline-${underline}`]]: underline && underline !== 'none'
  //       },
  //       className
  //     ),
  //     target: isExternal ? '_blank' : target,
  //     rel: isExternal && !rel ? 'noopener external' : rel,
  //     'data-pui-component': overlay ? 'overlay-link' : 'link',
  //     onBlur: onBlurHandler,
  //     onKeyUp: onKeyUpHandler,
  //     ...props
  //   },
  //   children,
  //   isExternal && externalIcon && (
  //     <Suspense>
  //       <ExternalIcon />
  //     </Suspense>
  //   )
  // );
});

export default Link;
