'use client';

import { useContext } from 'react';
import {
  ThemeModeContext,
  ThemeToggleModeContext
} from '../_context/ThemeContext';

export function useColorModeValue() {
  const colorMode = useContext(ThemeModeContext);

  return colorMode;
}

export function useColorModeToggle() {
  const toggleColorMode = useContext(ThemeToggleModeContext);

  return toggleColorMode;
}

function useColorMode() {
  const colorMode = useContext(ThemeModeContext);
  const toggleColorMode = useContext(ThemeToggleModeContext);

  return { colorMode, toggleColorMode };
}

export default useColorMode;
