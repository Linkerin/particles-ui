import { forwardRef } from 'react';
import classNames from 'classnames';

import Button from '../Button/Button';
import { createPolymorphicComponent } from '../../lib/createPolymorphicComponent';
import { IconButtonBaseProps, IconButtonProps } from './IconButton.types';

import styles from './IconButton.module.scss';

export type { IconButtonProps };

const DEFAULT_ELEMENT = 'button';

const _IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function _IconButton(
    {
      className,
      icon,
      loadingSpinner,
      as = DEFAULT_ELEMENT,
      size = 'md',
      variant = 'standard',
      ...props
    },
    ref
  ) {
    return (
      <Button
        ref={ref}
        as={as}
        className={classNames(styles[size], className)}
        leftIcon={icon}
        loadingElement={
          loadingSpinner === false ? (
            <span data-pui-component="btn-icon">{icon}</span>
          ) : undefined
        }
        loadingSpinner={loadingSpinner}
        variant={variant === 'standard' ? 'text' : variant}
        {...props}
      />
    );
  }
);

/**
 * Icon button component is used to display actions in a compact layout.
 * We recommend setting the `title` property.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/button | WAI-ARIA | Button Pattern}
 * @see {@link https://particles.snipshot.dev/docs/components/icon-button | Particles UI | Button}
 */
const IconButton = createPolymorphicComponent<
  typeof DEFAULT_ELEMENT,
  IconButtonBaseProps
>(_IconButton);

export default IconButton;
