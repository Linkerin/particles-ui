import { getCssVars, getTheme, mergeThemes } from './utils';
import { Theme, ThemeMainColors } from './theme.types';

interface ThemeProps {
  mainColors?: ThemeMainColors;
  theme?: Theme;
}

/**
 * Generates and injects CSS variables into the HTML document based on the provided theme
 *
 * @param {ThemeMainColors} props.mainColors - An object that defines the main colors of the theme.
 * @param {Theme} props.theme - An object that defines the custom theme.
 * @returns {JSX.Element} - The JSX element containing
 * the injected CSS variables inside `<style>` elements.
 */
function PuiTheme({ mainColors, theme }: ThemeProps): JSX.Element {
  const defaultTheme = getTheme(mainColors);
  const composedTheme = mergeThemes(defaultTheme, theme);
  const { common, light, dark } = getCssVars(composedTheme);

  return (
    <>
      <style
        id="pui-common-tokens"
        dangerouslySetInnerHTML={{
          __html: `html {\n${common} }`
        }}
      />
      <style
        id="pui-light-tokens"
        dangerouslySetInnerHTML={{
          __html:
            `@media (prefers-color-scheme: light) {\n  html {\n${light} }}\n` +
            `\nhtml[data-pui-mode="light"] {\n${light} }`
        }}
      />
      <style
        id="pui-dark-tokens"
        dangerouslySetInnerHTML={{
          __html:
            `@media (prefers-color-scheme: dark) {\n  html {\n${dark} }}\n` +
            `\nhtml[data-pui-mode="dark"] {\n${dark} }`
        }}
      />
    </>
  );
}

export default PuiTheme;
