'use client';

import { forwardRef, useRef } from 'react';
import classNames from 'classnames';

import { CardProps } from './Card.types';
import useInteractivityHandlers from '../../_hooks/useInteractivityHandlers';
import useMergedRefs from '../../_hooks/useMergedRefs';

import alignItemsStyles from '../../styles/particles-ui/util-classes/align-items.module.scss';
import flexDirectionStyles from '../../styles/particles-ui/util-classes/flex-direction.module.scss';
import gapStyles from '../../styles/particles-ui/util-classes/gap.module.scss';
import justifyContentStyles from '../../styles/particles-ui/util-classes/justify-content.module.scss';
import styles from './Card.module.scss';

export type { CardProps };

/**
 * Card component is used to display content and actions on a single topic.
 * Contains related elements. Use with `CardHeader`, `CardBody` and `CardFooter` components.
 *
 * The component renders as a `section` element.
 * @see {@link https://particles.snipshot.dev/docs/components/card | Particles UI | Card}
 */
const Card = forwardRef<HTMLElement, CardProps>(function Card(
  {
    children,
    className,
    style,
    alignItems,
    gap,
    justifyContent,
    size = 'md',
    onClick,
    onClickCapture,
    onKeyDown,
    disabled = false,
    interactiveStyle = false,
    flexDirection = 'column',
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

  return (
    <section
      ref={mergedRefs}
      className={classNames(
        flexDirectionStyles[flexDirection],
        { [alignItemsStyles[`${alignItems}`]]: !!alignItems },
        { [gapStyles[`${gap}`]]: !!gap },
        { [justifyContentStyles[`${justifyContent}`]]: !!justifyContent },
        styles.card,
        styles[variant],
        styles[size],
        { [styles.clickable]: clickable },
        { [styles.disabled]: clickable && disabled },
        className
      )}
      style={style}
      onKeyDown={onKeyDownHandler}
      onClickCapture={onClickCaptureHandler}
      onClick={disabled ? undefined : onClickHandler}
      tabIndex={clickable && !disabled ? 0 : undefined}
      role={clickable ? 'button' : undefined}
      aria-disabled={clickable ? disabled : undefined}
      {...props}
    >
      {children}
    </section>
  );
});

export default Card;
