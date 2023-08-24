import { createElement, forwardRef, lazy, Suspense } from 'react';
import classNames from 'classnames';

import { AnchorElementProps } from '@/app/_lib/puiHTMLPropTypes';

const ExternalIcon = lazy(() => import('../ExternalIcon/ExternalIcon'));

import styles from './Link.module.scss';

export interface LinkProps<T> extends AnchorElementProps {
  as?: T;
  color?: 'primary' | 'inherit';
  isExternal?: boolean;
  noExternalIcon?: boolean;
  overlay?: boolean;
  underline?: 'none' | 'hover' | 'always';
}

/**
 * Link component that wraps an HTML `<a>` element.
 * Could be used with different routing libraries link components via `as` prop.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/link | WAI-ARIA | Link Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/link | Particles UI | Link}
 */
const Link = forwardRef<
  HTMLAnchorElement,
  LinkProps<'a' | React.ComponentType<any>>
>(function Link(
  {
    children,
    className,
    rel,
    underline,
    as = 'a',
    color = 'primary',
    isExternal = false,
    noExternalIcon = false,
    overlay = false,
    target = '_self',
    ...props
  },
  ref
) {
  return createElement(
    as,
    {
      ref,
      className: classNames(
        styles.link,
        styles[color],
        { [styles.external]: isExternal },
        {
          [styles[`underline-${underline}`]]: underline && underline !== 'none'
        },
        className
      ),
      target: isExternal ? '_blank' : target,
      rel: isExternal && !rel ? 'noopener external' : rel,
      'data-pui-component': overlay ? 'overlay-link' : 'link',
      ...props
    },
    children,
    isExternal && !noExternalIcon && (
      <Suspense>
        <ExternalIcon />
      </Suspense>
    )
  );
});

export default Link;
