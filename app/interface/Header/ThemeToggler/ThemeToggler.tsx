'use client';

import { IconDeviceLaptop, IconMoon, IconSun } from '@tabler/icons-react';

import { IconButton } from '../../../../src/components/IconButton/IconButton';
import useColorMode from '../../../../src/hooks/useColorMode';

import styles from './ThemeToggler.module.css';

// Greeting in the browser console
const consoleColor = '#543792';
console.log(
  '%c🇵​​​​​🇦​​​​​🇷​​​​​🇹​​​​​🇮​​​​​🇨​​​​​🇱​​​​​🇪​​​​​🇸​​​​​ 🇺​​​​​🇮',
  `color: ${consoleColor}; font-size: 26px`
);

function ThemeToggler() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <div className={styles.group} role="group">
      <IconButton
        aria-label="Theme mode toggler"
        title={`Current mode: ${colorMode}`}
        variant={colorMode === 'light' ? 'filled' : 'soft'}
        icon={<IconSun />}
        onClick={() => setColorMode('light')}
      />
      <IconButton
        aria-label="Theme mode toggler"
        title={`Current mode: ${colorMode}`}
        variant={colorMode === 'system' ? 'filled' : 'soft'}
        icon={<IconDeviceLaptop />}
        onClick={() => setColorMode('system')}
      />
      <IconButton
        aria-label="Theme mode toggler"
        title={`Current mode: ${colorMode}`}
        variant={colorMode === 'dark' ? 'filled' : 'soft'}
        icon={<IconMoon />}
        onClick={() => setColorMode('dark')}
      />
    </div>
  );
}

export default ThemeToggler;
