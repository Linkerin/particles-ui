import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import { TextBaseProps, TextProps } from './Text.types';

import styles from './Text.module.scss';

export type { TextProps };

const DEFAULT_ELEMENT = 'p';

const _Text = forwardRef<HTMLElement, TextProps>(function _Text(
  {
    children,
    className,
    as = DEFAULT_ELEMENT,
    color = 'inherit',
    size = 'md',
    truncate = false,
    variant = 'body',
    ...props
  },
  ref
) {
  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.text,
        styles[size],
        { [styles.truncate]: truncate },
        { [styles[variant]]: variant !== 'inherit' },
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
 * Text component is used to render text and paragraphs.
 *
 * By default, the component is rendered as a `<p>` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/text | Particles UI | Text}
 */
export const Text = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  TextBaseProps
>(_Text);
