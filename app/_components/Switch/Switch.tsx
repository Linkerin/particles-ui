'use client';

import { forwardRef, useRef } from 'react';
import classNames from 'classnames';

import {
  InputElementProps,
  LabelElementProps
} from '@/app/_lib/puiHTMLPropTypes';
import { PuiSize } from '@/app/_lib/types';

import styles from './Switch.module.scss';

interface SwitchProps extends Omit<InputElementProps, 'size'> {
  color?: 'primary' | 'secondary' | 'tertiary';
  labelProps?: LabelElementProps;
  labelText?: string;
  selectedIcon?: React.ReactNode;
  size?: Exclude<PuiSize, 'xs' | 'xl'>;
  tabIndex?: number;
  unselectedIcon?: React.ReactNode;
}

/**
 * Switch component that renders as an HTML `<input type="checkbox">` element.
 * The element allows users to choose one of two values: "on" or "off".
 * Use switches if the items in a list can be independently controlled.
 * Switches are the preffered way to adjust settings.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/switch/ | WAI-ARIA | Switch Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/switch | Particles UI | Switch}
 */
const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    className,
    labelProps,
    labelText,
    style,
    selectedIcon,
    unselectedIcon,
    color = 'primary',
    disabled = false,
    size = 'md',
    tabIndex = 0,
    ...props
  },
  ref
) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onKeyDownHander: React.KeyboardEventHandler<HTMLLabelElement> = e => {
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();

      if (ref && typeof ref === 'object' && ref.current) {
        ref.current.focus();
        ref.current.click();
      } else if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.click();
      }
    }

    labelProps?.onKeyDown?.(e);
  };

  return (
    <label
      className={classNames(
        styles.label,
        styles[size],
        { [styles.disabled]: disabled },
        labelProps?.className
      )}
      aria-disabled={disabled}
      tabIndex={disabled ? undefined : tabIndex}
      onKeyDown={onKeyDownHander}
      {...labelProps}
    >
      {labelText}
      <input
        ref={ref ?? inputRef}
        type="checkbox"
        role="switch"
        style={style}
        hidden
        disabled={disabled}
        {...props}
      />
      <span
        className={classNames(
          styles.track,
          styles[color],
          { [styles.disabled]: disabled },
          { [styles['selected-icon']]: !!selectedIcon },
          { [styles['unselected-icon']]: !!unselectedIcon },
          className
        )}
        aria-hidden
      >
        <span className={classNames('display-inline-block', styles.thumb)}>
          {!!unselectedIcon && (
            <span data-pui-component="unselected-icon">{unselectedIcon}</span>
          )}
          {!!selectedIcon && (
            <span data-pui-component="selected-icon">{selectedIcon}</span>
          )}
        </span>
      </span>
    </label>
  );
});

export default Switch;
