import { IconButtonProps } from '../IconButton/IconButton.types';

export type CloseButtonProps = Omit<
  IconButtonProps,
  'ref' | 'data-pui-component' | 'icon' | 'aria-label'
> & { 'aria-label'?: string };
