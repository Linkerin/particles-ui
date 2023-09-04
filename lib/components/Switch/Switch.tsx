'use client';

import { forwardRef, useCallback, useRef, useState } from 'react';
import classNames from 'classnames';

import { SwitchProps } from './Switch.types';
import useKeyboardFocusOutline from '../../hooks/useKeyboardFocusOutline';

import gapStyles from '../../styles/util-classes/gap.module.scss';
import styles from './Switch.module.scss';

export type { SwitchProps };

/**
 * Switch component that renders as an HTML `<input type="checkbox">` element.
 * The element allows users to choose one of two values: "on" or "off".
 * Use switches if the items in a list can be independently controlled.
 * Switches are the preffered way to adjust settings.
 *
 * Privide `aria-label` value if you don't use `labelElement`.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/switch/ | WAI-ARIA | Switch Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/switch | Particles UI | Switch}
 */
const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  {
    className,
    checked,
    defaultChecked,
    onChange,
    labelElement,
    selectedIcon,
    unselectedIcon,
    color = 'primary',
    disabled = false,
    labelGap = 'md',
    labelPosition = 'left',
    labelProps = {},
    size = 'md',
    tabIndex = 0,
    ...props
  },
  ref
) {
  const {
    className: labelClassName,
    onBlur: labelOnBlur,
    onKeyUp: labelOnKeyUp,
    onKeyDown: labelOnKeyDown,
    ...restLabelProps
  } = labelProps;

  const [checkedState, setCheckedState] = useState(!!defaultChecked);
  const isChecked = checked ?? checkedState;

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    e => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      if (typeof checked !== 'undefined') {
        onChange?.(e);
      } else {
        setCheckedState(e.target.checked);
      }
    },
    [disabled, checked, onChange]
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { onBlurHandler, onKeyUpHandler, outlineDefaultClassName } =
    useKeyboardFocusOutline({
      onBlur: labelOnBlur,
      onKeyUp: labelOnKeyUp
    });

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

    labelOnKeyDown?.(e);
  };

  return (
    <label
      className={classNames(
        styles.label,
        styles[size],
        gapStyles[labelGap],
        outlineDefaultClassName,
        { [styles.disabled]: disabled },
        { [styles['right-label']]: labelPosition === 'right' },
        labelClassName
      )}
      aria-disabled={disabled}
      tabIndex={disabled ? undefined : tabIndex}
      onBlur={onBlurHandler}
      onKeyDown={onKeyDownHander}
      onKeyUp={onKeyUpHandler}
      {...restLabelProps}
    >
      {labelElement}
      <input
        ref={ref ?? inputRef}
        type="checkbox"
        role="switch"
        hidden
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
      <span
        className={classNames(
          styles.track,
          styles[color],
          { [styles.disabled]: disabled },
          { [styles['unselected-icon']]: !!unselectedIcon },
          className
        )}
        aria-hidden
      >
        <span className={classNames(styles.thumb)}>
          {isChecked ? selectedIcon : unselectedIcon}
        </span>
      </span>
    </label>
  );
});

export default Switch;
