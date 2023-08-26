import { forwardRef } from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';
import { ButtonBaseProps, PuiStyleVariant } from '@/app/_lib/types';

import styles from './IconButton.module.scss';

export interface IconButtonProps
  extends Omit<ButtonBaseProps, 'children' | 'aria-label' | 'ref'> {
  'aria-label': React.AriaAttributes['aria-label'];
  icon: React.ReactElement;
  variant?: PuiStyleVariant | 'standard';
}

/**
 * Icon button component is used to display actions in a compact layout.
 * We recommend setting the `title` property.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/icon-button | Particles UI | Button}
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      className,
      icon,
      noLoadingSpinner,
      size = 'md',
      variant = 'standard',
      ...props
    },
    ref
  ) {
    return (
      <Button
        ref={ref}
        className={classNames(styles[size], className)}
        leftIcon={icon}
        loadingElement={
          noLoadingSpinner ? (
            <span data-pui-component="btn-icon">{icon}</span>
          ) : undefined
        }
        noLoadingSpinner={noLoadingSpinner}
        variant={variant === 'standard' ? 'text' : variant}
        {...props}
      />
    );
  }
);

export default IconButton;
