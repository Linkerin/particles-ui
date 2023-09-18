import { forwardRef } from 'react';
import classNames from 'classnames';

import Box from '../Box/Box';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import { HEADING_ELEMENTS } from '../../lib/constants';
import { HeadingBaseProps, HeadingProps } from './Heading.types';

import styles from './Heading.module.scss';

export type { HeadingProps };

const DEFAULT_ELEMENT = 'h2';

const _Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function _Heading(
  {
    children,
    className,
    as = DEFAULT_ELEMENT,
    color = 'on-background',
    truncate = false,
    variant,
    ...props
  },
  ref
) {
  let headingVariant = variant ?? 'subtitle-md';
  if (!variant && HEADING_ELEMENTS.findIndex(elem => elem === as) !== -1) {
    headingVariant = as as (typeof HEADING_ELEMENTS)[number];
  }

  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.heading,
        { [styles.truncate]: truncate },
        { [styles[headingVariant]]: headingVariant !== 'inherit' },
        { [styles[color]]: color !== 'inherit' },
        className
      )}
      {...props}
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
 * @see {@link https://www.w3.org/WAI/tutorials/page-structure/headings | WAI-ARIA | Headings}
 * @see {@link https://particles.snipshot.dev/docs/components/heading | Particles UI | Heading}
 */
const Heading = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  HeadingBaseProps
>(_Heading);

export default Heading;
