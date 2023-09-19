'use client';

import { forwardRef, useRef } from 'react';
import classNames from 'classnames';

import { Box } from '../Box/Box';
import { CardBaseProps, CardProps } from './Card.types';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import useInteractivityHandlers from '../../hooks/useInteractivityHandlers';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';
import useMergedRefs from '../../hooks/useMergedRefs';

import alignItemsStyles from '../../styles/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../styles/util-classes/flex-direction.module.scss';
import gapStyles from '../../styles/util-classes/gap.module.scss';
import justifyContentStyles from '../../styles/util-classes/justify-content.module.scss';
import styles from './Card.module.scss';

export type { CardProps };

const DEFAULT_ELEMENT = 'section';

const _Card = forwardRef<HTMLElement, CardProps>(function _Card(
  {
    children,
    className,
    style,
    alignItems,
    gap,
    justifyContent,
    onBlur,
    onClick,
    onClickCapture,
    onKeyDown,
    onKeyUp,
    as = DEFAULT_ELEMENT,
    disabled = false,
    interactiveStyle = false,
    flexDirection = 'column',
    padding = true,
    size = 'md',
    variant = 'filled',
    ...props
  },
  ref
) {
  const cardRef = useRef<HTMLElement | null>(null);
  const mergedRefs = useMergedRefs([cardRef, ref]);

  const clickable =
    interactiveStyle || (!!onClick && typeof onClick === 'function');

  const { onClickHandler, onClickCaptureHandler, onKeyDownHandler } =
    useInteractivityHandlers({
      disabled,
      onClick,
      onClickCapture,
      onKeyDown,
      ref: cardRef
    });

  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({ onBlur, onKeyUp });

  return (
    <Box
      ref={mergedRefs}
      as={as}
      className={classNames(
        flexDirectionStyles[flexDirection],
        { [alignItemsStyles[`${alignItems}`]]: !!alignItems },
        { [gapStyles[`${gap}`]]: !!gap },
        { [justifyContentStyles[`${justifyContent}`]]: !!justifyContent },
        styles.card,
        styles[variant],
        { [styles[size]]: padding },
        { [styles.clickable]: clickable },
        { [styles.disabled]: clickable && disabled },
        { [outlineDefaultClassName]: clickable },
        className
      )}
      style={style}
      onBlur={clickable ? onBlurHandler : onBlur}
      onClick={disabled ? undefined : onClickHandler}
      onClickCapture={onClickCaptureHandler}
      onKeyDown={onKeyDownHandler}
      onKeyUp={clickable ? onKeyUpHandler : onKeyUp}
      tabIndex={clickable && !disabled ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-disabled={clickable ? disabled : undefined}
      {...props}
    >
      {children}
    </Box>
  );
});

/**
 * Card component is used to display content and actions on a single topic.
 * Contains related elements. Use with `CardHeader`, `CardBody` and `CardFooter` components.
 *
 * The component renders as a `section` element.
 *
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
export const Card = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  CardBaseProps
>(_Card);
