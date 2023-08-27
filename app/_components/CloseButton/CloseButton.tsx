import { forwardRef } from 'react';

import CloseIcon from '../PuiIcons/CloseIcon/CloseIcon';
import IconButton, { IconButtonProps } from '../IconButton/IconButton';

export type CloseButtonProps = Omit<
  IconButtonProps,
  'ref' | 'data-pui-component' | 'icon' | 'aria-label'
> & { 'aria-label'?: string };

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
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

export default CloseButton;
