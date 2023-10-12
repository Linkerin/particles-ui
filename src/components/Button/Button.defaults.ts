import { ButtonProps } from './Button.types';

export const buttonDefaultProps = Object.freeze({
  as: 'button',
  color: 'primary',
  dense: false,
  disabled: false,
  isLoading: false,
  loadingText: '',
  loadingSpinner: true,
  radius: 'md',
  shadowOnPress: false,
  shrinkOnPress: false,
  size: 'md',
  variant: 'filled'
});

const letterSpacingMapping = {
  xs: 'lg',
  sm: 'lg',
  md: 'sm',
  lg: 'sm',
  xl: 'sm'
};

export function getButtonCssVars({
  color,
  size
}: Pick<ButtonProps, 'color' | 'size'>) {
  const colorVars =
    !color || color === buttonDefaultProps.color
      ? {}
      : {
          '--pui-btn-color': `var(--pui-${color})`,
          '--pui-btn-color-channels': `var(--pui-${color}-channels)`,
          '--pui-btn-on-color': `var(--pui-on-${color})`,
          '--pui-btn-color-darker': `var(--pui-${color}-darker)`,
          '--pui-btn-color-darker-channels': `var(--pui-${color}-darker-channels)`,
          '--pui-btn-color-container-low': `var(--pui-${color}-container-low)`,
          '--pui-btn-on-color-container': `var(--pui-on-${color}-container)`
        };

  const sizeVars =
    !size || size === buttonDefaultProps.size
      ? {}
      : {
          '--pui-btn-font-size': `var(--pui-label-size-${size})`,
          '--pui-btn-line-height': `var(--pui-label-height-${size})`,
          '--pui-btn-letter-spacing': `var(--pui-letter-spacing-${letterSpacingMapping[size]})`
        };

  const cssVars: ButtonProps['style'] = { ...colorVars, ...sizeVars };

  return cssVars;
}
