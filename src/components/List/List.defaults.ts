import { ListProps } from './List.types';

export const listDefaultProps = Object.freeze({
  as: 'ul',
  dense: false,
  pdInline: true,
  role: 'list'
});

export function getListCssVars(pdInline: ListProps['pdInline']) {
  const noPd = '0rem';
  const cssVars = pdInline
    ? {}
    : {
        '--pui-list-item-pl': noPd,
        '--pui-list-item-pr': noPd
      };

  return cssVars;
}
