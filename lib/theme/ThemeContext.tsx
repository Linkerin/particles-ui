'use client';

import { createContext, useCallback, useState, useEffect } from 'react';

import { COLOR_MODES } from '../lib/constants';
import { PuiColorMode } from '../lib/types';
import ssrLocalStorage from '../services/SsrLocalStorage';

type ThemeMode = Exclude<PuiColorMode, 'system'>;
type ThemeModeContextValue = ThemeMode | null;
type ThemeSetModeContextValue = (mode: PuiColorMode) => boolean;

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

/**
 * Determines the color mode of the user's operating system
 * based on the `prefers-color-scheme` media query.
 *
 * @returns {ThemeMode} Color mode value as a string
 */
function getSystemMode(): ThemeMode {
  const systemDarkMode = window?.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const systemMode = systemDarkMode ? 'dark' : 'light';

  return systemMode;
}

export const ThemeModeContext = createContext<ThemeModeContextValue>(null);
export const ThemeToggleModeContext = createContext(() => {});
export const ThemeSetModeContext = createContext<ThemeSetModeContextValue>(
  () => false
);

interface ThemeProviderProps {
  children: React.ReactNode;
  withLocalStorage?: boolean;
}

/**
 * Provides a theme mode context to its children components.
 * Allows toggling between light and dark modes and supports a system mode.
 * The color mode is determined based on the `data-pui-mode` attribute
 * of the HTML element.
 */
export default function ThemeProvider({
  children,
  withLocalStorage = true
}: ThemeProviderProps) {
  const [colorMode, setColorMode] = useState<ThemeModeContextValue>(null);

  /**
   * Color mode toggle function. Switches between 'light' and 'dark' mode
   */
  const toggleColorMode = useCallback(() => {
    const newMode = colorMode === 'light' ? 'dark' : 'light';

    const htmlChanged = changePuiModeHtmlAttr(newMode);
    if (htmlChanged) {
      setColorMode(newMode);
      if (withLocalStorage) ssrLocalStorage.setItem('pui-mode', newMode);
    }

    return;
  }, [colorMode, withLocalStorage]);

  /**
   * The color mode setter function
   *
   * @param {PuiColorMode} mode - The color mode to be set
   * @returns {boolean} `true` if the color mode was successfully set, `false` otherwise
   */
  const colorModeSetter = useCallback(
    (mode: PuiColorMode) => {
      if (!mode || !COLOR_MODES.includes(mode)) {
        throw new Error(
          `Invalid color mode value provided: ${mode}.
          Allowed values: ${COLOR_MODES.join(', ')}`
        );
      }

      if (!window) return false;

      const newMode = mode === 'system' ? getSystemMode() : mode;

      const htmlChanged = changePuiModeHtmlAttr(newMode);
      if (htmlChanged) {
        setColorMode(newMode);
        if (withLocalStorage) {
          ssrLocalStorage.setItem(
            'pui-mode',
            mode === 'system' ? mode : newMode
          );
        }

        return true;
      }

      return false;
    },
    [withLocalStorage]
  );

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

      const fromStorage = withLocalStorage
        ? (ssrLocalStorage.getItem('pui-mode') as PuiColorMode)
        : null;
      const puiLocal =
        fromStorage && COLOR_MODES.includes(fromStorage) ? fromStorage : null;

      const systemMode = getSystemMode();

      const localMode = !puiLocal
        ? null
        : puiLocal === 'system'
        ? systemMode
        : puiLocal;
      const serverMode = puiMode === 'system' ? systemMode : puiMode;
      const mode = localMode ?? serverMode;

      const htmlChanged = changePuiModeHtmlAttr(mode);
      if (htmlChanged) setColorMode(mode);
    }
  }, [withLocalStorage]);

  if (colorMode === null) {
    return children;
  }

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeToggleModeContext.Provider value={toggleColorMode}>
        <ThemeSetModeContext.Provider value={colorModeSetter}>
          {children}
        </ThemeSetModeContext.Provider>
      </ThemeToggleModeContext.Provider>
    </ThemeModeContext.Provider>
  );
}
