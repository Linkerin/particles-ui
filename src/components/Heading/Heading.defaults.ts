import { HeadingProps } from './Heading.types';
import { HEADING_ELEMENTS } from '../../lib/constants';

const subtitleSizeMapping = {
  sm: 'sm',
  md: 'md',
  lg: 'xl'
};

export const headingDefaultProps = Object.freeze({
  as: 'h2',
  color: 'on-background',
  truncate: false
});

interface GetHeadingCssVarsParams {
  color: HeadingProps['color'];
  headingVariant: HeadingProps['variant'];
}

export function getHeadingCssVars({
  color,
  headingVariant
}: GetHeadingCssVarsParams) {
  const styleObj: Record<string, string> = {};

  if (color !== 'inherit') {
    styleObj['--pui-heading-color'] = `var(--pui-${color})`;
  }

  if (HEADING_ELEMENTS.findIndex(elem => elem === headingVariant) !== -1) {
    styleObj['--pui-heading-font-weight'] = 'var(--pui-font-weight-regular)';
    styleObj[
      '--pui-heading-font-size'
    ] = `var(--pui-heading-size-${headingVariant})`;
    styleObj[
      '--pui-heading-line-height'
    ] = `var(--pui-heading-height-${headingVariant})`;
  } else {
    // 'subtitle-*' variants
    const splitted = headingVariant?.split('-');
    if (splitted?.length == 2 && splitted.at(0) === 'subtitle') {
      const size = splitted.at(1) as keyof typeof subtitleSizeMapping;

      if (size) {
        styleObj['--pui-heading-font-weight'] = 'var(--pui-font-weight-medium)';
        styleObj[
          '--pui-heading-font-size'
        ] = `var(--pui-text-size-${subtitleSizeMapping[size]})`;
        styleObj[
          '--pui-heading-line-height'
        ] = `var(--pui-text-height-${subtitleSizeMapping[size]})`;
      }
    }
  }

  styleObj['--pui-heading-letter-spacing'] = `var(--pui-letter-spacing-0)`;

  return styleObj;
}
