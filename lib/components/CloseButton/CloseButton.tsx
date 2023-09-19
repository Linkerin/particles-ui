import { forwardRef } from 'react';

import CloseIcon from '../PuiIcons/CloseIcon/CloseIcon';
import { CloseButtonProps } from './CloseButton.types';
import { IconButton } from '../IconButton/IconButton';

export type { CloseButtonProps };

/**
 * Close button component
 *
 * @see {@link https://particles.snipshot.dev/docs/components/icon-button | Particles UI | Button}
 */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton({ 'aria-label': ariaLabel = 'Close', ...props }, ref) {
    return (
      <IconButton
        ref={ref}
        aria-label={ariaLabel}
        icon={<CloseIcon />}
        data-pui-component="close-btn"
        {...props}
      />
    );
  }
);
