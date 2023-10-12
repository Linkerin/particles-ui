import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import { headingDefaultProps, getHeadingCssVars } from './Heading.defaults';
import { HEADING_ELEMENTS } from '../../lib/constants';
import { HeadingBaseProps, HeadingProps } from './Heading.types';
import shallowMerge from '../../services/shallowMerge';

import styles from './Heading.module.scss';

export type { HeadingProps };

const _Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function _Heading(
  props,
  ref
) {
  const {
    children,
    className,
    style,
    as,
    color,
    truncate,
    variant,
    ...restProps
  } = shallowMerge(headingDefaultProps, props);

  let headingVariant = variant ?? 'subtitle-md';
  if (!variant && HEADING_ELEMENTS.findIndex(elem => elem === as) !== -1) {
    headingVariant = as as (typeof HEADING_ELEMENTS)[number];
  }

  const headingCssVars = getHeadingCssVars({ color, headingVariant });

  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.heading,
        { [styles.truncate]: truncate },
        className
      )}
      style={{ ...headingCssVars, ...style }}
      {...restProps}
    >
      {children}
    </Box>
  );
});

/**
 * Heading component is used to render semantic HTML heading elements.
 *
 * By default, the component is rendered as a `<h2>` element.
 * Do not skip heading levels.
 *
 * @see {@link https://www.w3.org/WAI/tutorials/page-structure/headings | WAI-ARIA | Headings}
 * @see {@link https://particles.snipshot.dev/docs/components/heading | Particles UI | Heading}
 */
export const Heading = createPolymorphicComponent<
  typeof headingDefaultProps.as,
  HeadingBaseProps
>(_Heading);
