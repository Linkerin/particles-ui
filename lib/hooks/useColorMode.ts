'use client';

import { useContext } from 'react';
import {
  ThemeModeContext,
  ThemeToggleModeContext
} from '../theme/ThemeContext';

/**
 * Returns only the current color mode value from the Context provider.
 * @see {@link https://particles.snipshot.dev/docs/hooks/use-color-mode | Particles UI | useColorMode}
 *
 * @returns `colorMode` - the current color mode value.
 *
 * @example
 * import { useColorModeValue } from 'pui/hooks/useColorMode';
 *
 * function MyComponent() {
 *   const colorMode = useColorModeValue();
 * }
 */
export function useColorModeValue() {
  const colorMode = useContext(ThemeModeContext);

  return colorMode;
}

/**
 * Returns only the color mode toggle function from the Context provider.
 * @see {@link https://particles.snipshot.dev/docs/hooks/use-color-mode | Particles UI | useColorMode}
 *
 * @returns `toggleColorMode` function used to toggle the color mode.
 *
 * @example
 * import { useColorModeToggle } from 'pui/hooks/useColorMode';
 *
 * function MyComponent() {
 *   const toggleColorMode = useColorModeToggle();
 * }
 */
export function useColorModeToggle() {
  const toggleColorMode = useContext(ThemeToggleModeContext);

  return toggleColorMode;
}

/**
 * Returns both the color mode and toggle function from the Context provider.
 * @see {@link https://particles.snipshot.dev/docs/hooks/use-color-mode | Particles UI | useColorMode}
 *
 * @returns An object with `colorMode` and `toggleColorMode` properties.
 * - `colorMode` represents the current color mode.
 * - `toggleColorMode` is a function used to toggle the color mode.
 *
 * @example
 * import useColorMode from 'pui/hooks/useColorMode';
 *
 * function MyComponent() {
 *   const { colorMode, toggleColorMode } = useColorMode();
 * }
 */
function useColorMode() {
  const colorMode = useContext(ThemeModeContext);
  const toggleColorMode = useContext(ThemeToggleModeContext);

  return { colorMode, toggleColorMode };
}

export default useColorMode;
