import { forwardRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { createPolymorphicComponent } from '../../services/createPolymorphicComponent';
import shallowMerge from '../../services/shallowMerge';
import { TextBaseProps, TextProps } from './Text.types';
import { textDefaultProps, getTextCssVars } from './Text.defaults';

import styles from './Text.module.scss';

export type { TextProps };

const _Text = forwardRef<HTMLElement, TextProps>(function _Text(props, ref) {
  const {
    children,
    className,
    style,
    as,
    color,
    size,
    truncate,
    variant,
    ...restProps
  } = shallowMerge(textDefaultProps, props);
  const textCssVars = getTextCssVars({ color, size, variant });

  return (
    <Box
      ref={ref}
      as={as}
      className={classNames(
        styles.text,
        { [styles.truncate]: truncate },
        className
      )}
      style={{ ...textCssVars, ...style }}
      {...restProps}
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
  typeof textDefaultProps.as,
  TextBaseProps
>(_Text);
