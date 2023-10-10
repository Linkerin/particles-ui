interface IconProp {
  /**
   * Textual name of the icon like `'arrow_forward'`
   */
  icon: string;
  /**
   * It's not allowed to use `code` prop alongside `icon` prop
   */
  code?: undefined;
}

interface CodeProp {
  /**
   * It's not allowed to use `icon` prop alongside `code` prop
   */
  icon?: undefined;
  /**
   * Code point of the icon like `'e86f'`
   * @see {@link https://developers.google.com/fonts/docs/material_symbols#using_the_icons_in_html | Material Symbols guide}
   */
  code: string;
}

type MaterialIconProp = IconProp | CodeProp;

export type MaterialSymbolIconProps = MaterialIconProp &
  Omit<React.ComponentPropsWithoutRef<'span'>, 'children'>;
