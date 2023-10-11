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

export function getButtonColorVars(color?: string) {
  const colorName = color ?? 'primary';

  const cssVars = {
    '--pui-btn-color': `var(--pui-${colorName})`,
    '--pui-btn-color-channels': `var(--pui-${colorName}-channels)`,
    '--pui-btn-on-color': `var(--pui-on-${colorName})`,
    '--pui-btn-color-darker': `var(--pui-${colorName}-darker)`,
    '--pui-btn-color-darker-channels': `var(--pui-${colorName}-darker-channels)`,
    '--pui-btn-color-container-low': `var(--pui-${colorName}-container-low)`,
    '--pui-btn-on-color-container': `var(--pui-on-${colorName}-container)`
  };

  return cssVars;
}

export type ButtonColorCssVars =
  | keyof ReturnType<typeof getButtonColorVars>
  | '--pui-btn-icon-size';
