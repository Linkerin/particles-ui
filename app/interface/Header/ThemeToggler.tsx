'use client';

import { IconButton } from '@/lib/components/IconButton/IconButton';
import { IconMoon, IconSun } from '@tabler/icons-react';

import useColorMode from '@/lib/hooks/useColorMode';

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
