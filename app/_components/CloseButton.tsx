import { forwardRef } from 'react';

import CloseIcon from './CloseIcon/CloseIcon';
import IconButton, { IconButtonProps } from './IconButton/IconButton';

type CloseButtonProps = Omit<
  IconButtonProps,
  'ref' | 'aria-label' | 'data-pui-component' | 'icon'
>;

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <IconButton
        ref={ref}
        aria-label="Close"
        icon={<CloseIcon />}
        data-pui-component="close-btn"
        {...props}
      />
    );
  }
);

export default CloseButton;
