'use client';

import { createContext, useCallback, useState, useEffect } from 'react';

import { COLOR_MODES } from '../lib/constants';
import { PuiColorMode } from '../lib/types';
import ssrLocalStorage from '../services/SsrLocalStorage';

type ThemeMode = Exclude<PuiColorMode, 'system'>;
type ThemeModeContextValue = PuiColorMode | null;
type ThemeSetModeContextValue = (mode: PuiColorMode) => PuiColorMode | false;

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
    let newMode: ThemeMode;
    switch (colorMode) {
      case 'light':
        newMode = 'dark';
        break;

      case 'dark':
        newMode = 'light';
        break;

      default: {
        const systemMode = getSystemMode();
        newMode = systemMode === 'light' ? 'dark' : 'light';
        break;
      }
    }

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
   * @returns {PuiColorMode | false} `false` if the color mode was not set,
   * otherwise the value that was set
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

      const modeIsSystem = mode === 'system';
      const newMode = modeIsSystem ? getSystemMode() : mode;

      const htmlChanged = changePuiModeHtmlAttr(newMode);
      if (htmlChanged) {
        const modeValue = modeIsSystem ? mode : newMode;
        setColorMode(modeValue);

        if (withLocalStorage) {
          modeIsSystem
            ? ssrLocalStorage.removeItem('pui-mode')
            : ssrLocalStorage.setItem('pui-mode', newMode);
        }

        return modeValue;
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
        ? (ssrLocalStorage.getItem('pui-mode') as ThemeMode)
        : null;
      const puiLocal =
        fromStorage && COLOR_MODES.includes(fromStorage) ? fromStorage : null;

      const systemMode = getSystemMode();

      const serverMode = puiMode === 'system' ? systemMode : puiMode;
      const mode = puiLocal ?? serverMode;

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
