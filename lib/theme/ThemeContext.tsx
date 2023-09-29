'use client';

import { createContext, useCallback, useState, useEffect } from 'react';

import { COLOR_MODES } from '../lib/constants';
import { PuiColorMode } from '../lib/types';

type ThemeMode = Exclude<PuiColorMode, 'system'>;
type ThemeModeContextValue = ThemeMode | null;

/**
 * Changes the value of the `html[data-pui-mode]` attribute
 *
 * @param {'light' | 'dark'} mode `light` or `dark` color mode
 * @returns `true` in case of successful changes, otherwise `false`
 */
function changePuiModeHtmlAttr(mode: ThemeMode) {
  const html = document.documentElement;
  const htmlPuiMode = html.attributes.getNamedItem('data-pui-mode');
  if (!htmlPuiMode) return false;

  htmlPuiMode.value = mode;
  html.attributes.setNamedItem(htmlPuiMode);

  return true;
}

export const ThemeModeContext = createContext<ThemeModeContextValue>(null);

export const ThemeToggleModeContext = createContext(() => {});

/**
 * Provides a theme mode context to its children components.
 * Allows toggling between light and dark modes and supports a system mode.
 * The color mode is determined based on the `data-pui-mode` attribute
 * of the HTML element.
 *
 * @param children - The child components that need access to the color mode.
 * @returns The children components wrapped with the `ThemeModeContext.Provider`
 * and `ThemeToggleModeContext.Provider` components,
 * providing the color mode and toggle function as context values.
 */
export default function ThemeProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [colorMode, setColorMode] = useState<ThemeModeContextValue>(null);

  /**
   * Color mode toggle function. Switches between 'light' and 'dark' mode
   */
  const toggleColorMode = useCallback(() => {
    if (colorMode === 'light') {
      const htmlChanged = changePuiModeHtmlAttr('dark');
      if (htmlChanged) setColorMode('dark');
      return;
    }

    const htmlChanged = changePuiModeHtmlAttr('light');
    if (htmlChanged) setColorMode('light');

    return;
  }, [colorMode]);

  useEffect(() => {
    if (typeof document !== 'undefined' && typeof window !== 'undefined') {
      const html = document.documentElement;
      const puiMode = html.getAttribute('data-pui-mode') as PuiColorMode;

      if (!puiMode) {
        throw new Error('html element must have a `data-pui-mode` attribute');
      }

      if (!COLOR_MODES.includes(puiMode)) {
        throw new Error(
          `'${puiMode}' is an invalid value for a 'data-pui-mode' attribute`
        );
      }

      const systemDarkMode = window?.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      const systemMode = systemDarkMode ? 'dark' : 'light';
      let mode = puiMode === 'system' ? systemMode : puiMode;

      const htmlChanged = changePuiModeHtmlAttr(mode);
      if (htmlChanged) setColorMode(mode);
    }
  }, []);

  if (colorMode === null) {
    return children;
  }

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeToggleModeContext.Provider value={toggleColorMode}>
        {children}
      </ThemeToggleModeContext.Provider>
    </ThemeModeContext.Provider>
  );
}
