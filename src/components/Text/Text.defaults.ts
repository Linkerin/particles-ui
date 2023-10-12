import { TextProps } from './Text.types';

const letterSpacingMapping = {
  sm: 'sm',
  md: 'lg',
  lg: 'md',
  xl: 'md',
  xxl: 'md'
};

const labelSizeMapping = {
  size: {
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'lg',
    xxl: 'xl'
  },
  spacing: {
    sm: 'lg',
    md: 'lg',
    lg: 'sm',
    xl: 'sm',
    xxl: 'sm'
  }
};

export const textDefaultProps = Object.freeze({
  as: 'p',
  color: 'inherit',
  size: 'md',
  truncate: false,
  variant: 'body'
});

export function getTextCssVars({
  color,
  size,
  variant
}: Pick<TextProps, 'color' | 'size' | 'variant'>) {
  const styleObj: Record<string, string> = {};

  if (color !== 'inherit') {
    styleObj['--pui-text-color'] = `var(--pui-${color})`;
  }

  if (size) {
    switch (variant) {
      case 'body':
        styleObj['--pui-text-font-weight'] = 'var(--pui-font-weight-regular)';
        styleObj['--pui-text-font-size'] = `var(--pui-text-size-${size})`;
        styleObj['--pui-text-line-height'] = `var(--pui-text-height-${size})`;
        styleObj[
          '--pui-text-letter-spacing'
        ] = `var(--pui-letter-spacing-${letterSpacingMapping[size]})`;
        break;

      case 'label':
        styleObj['--pui-text-font-weight'] = 'var(--pui-font-weight-medium)';
        styleObj[
          '--pui-text-font-size'
        ] = `var(--pui-label-size-${labelSizeMapping.size[size]})`;
        styleObj[
          '--pui-text-line-height'
        ] = `var(--pui-label-height-${labelSizeMapping.size[size]})`;
        styleObj[
          '--pui-text-letter-spacing'
        ] = `var(--pui-letter-spacing-${labelSizeMapping.spacing[size]})`;
        break;

      default:
        break;
    }
  }

  return styleObj;
}
