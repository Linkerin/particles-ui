import { forwardRef } from 'react';

import CrossIcon from './CrossIcon';
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
        icon={<CrossIcon />}
        data-pui-component="close-btn"
        {...props}
      />
    );
  }
);

export default CloseButton;
