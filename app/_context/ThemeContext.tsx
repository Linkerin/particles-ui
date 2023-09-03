'use client';

import { createContext, useCallback, useState, useEffect } from 'react';

import { COLOR_MODES } from '../_lib/constants';
import { PuiColorMode } from '../_lib/types';

type ThemeModeContextValue = Exclude<PuiColorMode, 'system'> | null;

/**
 * Changes the value of the `html[data-pui-mode]` attribute
 * @param mode `light` or `dark` color mode
 * @returns `true` in case of successful changes, otherwise `false`
 */
function changePuiModeHtmlAttr(mode: Exclude<PuiColorMode, 'system'>) {
  const html = document.documentElement;
  const htmlPuiMode = html.attributes.getNamedItem('data-pui-mode');
  if (!htmlPuiMode) return false;

  htmlPuiMode.value = mode;
  html.attributes.setNamedItem(htmlPuiMode);

  return true;
}

export const ThemeModeContext = createContext<ThemeModeContextValue>(null);

export const ThemeToggleModeContext = createContext(() => {});

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
      const systemDarkMode =
        window && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemMode = systemDarkMode ? 'dark' : 'light';

      const html = document.documentElement;
      const htmlPuiMode = html.attributes.getNamedItem('data-pui-mode');
      const puiMode = htmlPuiMode?.value as PuiColorMode;

      if (!puiMode) {
        throw new Error('html element should have a `data-pui-mode` attribute');
      }

      if (COLOR_MODES.includes(puiMode)) {
        if (puiMode === 'system') {
          const htmlChanged = changePuiModeHtmlAttr(systemMode);
          if (htmlChanged) setColorMode(systemMode);
        } else {
          const htmlChanged = changePuiModeHtmlAttr(puiMode);
          if (htmlChanged) setColorMode(puiMode);
        }
      }
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

// 'use client';

// import { createContext, useCallback, useState, useEffect } from 'react';

// import { PuiColorMode } from '@/app/_lib/types';

// type ThemeModeValue = Exclude<PuiColorMode, 'system'> | null;

// /**
//  * Changes the value of the `html[data-pui-mode]` attribute
//  * @param mode `light` or `dark` color mode
//  * @returns `true` in case of successful changes, otherwise `false`
//  */
// function changePuiModeHtmlAttr(mode: Exclude<PuiColorMode, 'system'>) {
//   if (typeof document === 'undefined') return false;

//   const html = document.documentElement;
//   let htmlPuiMode = html.attributes.getNamedItem('data-pui-mode');
//   if (!htmlPuiMode) {
//     htmlPuiMode = document.createAttribute('data-pui-mode');
//   }

//   htmlPuiMode.value = mode;
//   html.attributes.setNamedItem(htmlPuiMode);

//   return true;
// }

// export const ThemeModeContext = createContext<ThemeModeValue>(null);

// export const ThemeToggleModeContext = createContext(() => {});

// export default function ThemeProvider({
//   children,
//   mode = 'system'
// }: {
//   children: React.ReactNode;
//   mode?: PuiColorMode;
// }) {
//   const [colorMode, setColorMode] = useState<ThemeModeValue>(null);

//   /**
//    * Color mode toggle function. Switches between 'light' and 'dark' mode
//    */
//   const toggleColorMode = useCallback(() => {
//     if (colorMode === 'light') {
//       const htmlChanged = changePuiModeHtmlAttr('dark');
//       if (htmlChanged) setColorMode('dark');
//       return;
//     }

//     const htmlChanged = changePuiModeHtmlAttr('light');
//     if (htmlChanged) setColorMode('light');

//     return;
//   }, [colorMode]);

//   useEffect(() => {
//     if (typeof document !== 'undefined' && typeof window !== 'undefined') {
//       const systemDarkMode =
//         window && window.matchMedia('(prefers-color-scheme: dark)').matches;
//       const systemMode = systemDarkMode ? 'dark' : 'light';

//       if (mode === 'system') {
//         const htmlChanged = changePuiModeHtmlAttr(systemMode);
//         if (htmlChanged) setColorMode(systemMode);
//       } else {
//         const htmlChanged = changePuiModeHtmlAttr(mode);
//         if (htmlChanged) setColorMode(mode);
//       }
//     }
//   }, [mode]);

//   if (colorMode === null) {
//     return children;
//   }

//   return (
//     <ThemeModeContext.Provider value={colorMode}>
//       <ThemeToggleModeContext.Provider value={toggleColorMode}>
//         {children}
//       </ThemeToggleModeContext.Provider>
//     </ThemeModeContext.Provider>
//   );
// }
