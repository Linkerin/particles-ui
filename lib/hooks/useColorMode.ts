'use client';

import { useContext } from 'react';
import {
  ThemeModeContext,
  ThemeSetModeContext,
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
 * Returns the color mode setter function.
 * The function returns `true` if the color mode was successfully set,
 * `false` otherwise
 * @see {@link https://particles.snipshot.dev/docs/hooks/use-color-mode-setter | Particles UI | useColorModeSetter}
 *
 *
 * @returns `setColorMode` function
 *
 * @example
 * import { useColorModeSetter } from 'pui/hooks/useColorMode';
 *
 * function MyComponent() {
 *   const setColorMode = useColorModeSetter();
 *   const handleOnClick = () => setColorMode('system');
 * }
 */
export function useColorModeSetter() {
  const setColorMode = useContext(ThemeSetModeContext);

  return setColorMode;
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
 * - `setColorMode` is a function used to set the color mode
 *    provided as an argument.
 *
 * @example
 * import { useColorMode } from 'pui/hooks/useColorMode';
 *
 * function MyComponent() {
 *   const { colorMode, toggleColorMode, setColorMode } = useColorMode();
 * }
 */
function useColorMode() {
  const colorMode = useContext(ThemeModeContext);
  const toggleColorMode = useContext(ThemeToggleModeContext);
  const setColorMode = useContext(ThemeSetModeContext);

  return { colorMode, toggleColorMode, setColorMode };
}

export default useColorMode;
