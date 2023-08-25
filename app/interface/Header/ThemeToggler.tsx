'use client';

import IconButton from '../../_components/IconButton/IconButton';
import Button from '../../_components/Button/Button';
import { IconMoon } from '@tabler/icons-react';
import { IconSun } from '@tabler/icons-react';
import useColorMode from '../../_hooks/useColorModeToggle';

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Theme mode toggler"
      title={`Current mode: ${colorMode}`}
      variant="outlined"
      icon={colorMode === 'light' ? <IconSun /> : <IconMoon />}
      onClick={toggleColorMode}
    />
  );
}

export default ThemeToggler;
