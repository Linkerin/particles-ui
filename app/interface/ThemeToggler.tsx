'use client';

import Button from '../_components/Button/Button';
import { IconMoon } from '@tabler/icons-react';
import { IconSun } from '@tabler/icons-react';
import useColorMode from '../_hooks/useColorModeToggle';

function ThemeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      variant="outlined"
      size="lg"
      leftIcon={colorMode === 'light' ? <IconSun /> : <IconMoon />}
      onClick={toggleColorMode}
    >
      {colorMode}
    </Button>
  );
}

export default ThemeToggler;
