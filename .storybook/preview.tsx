import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

import { PuiTheme } from '../src';

import '../src/styles/pui-base.scss';
import './storybook.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: { toc: true }
  },
  decorators: [
    Story => (
      <>
        <PuiTheme />
        <Story />
      </>
    ),
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'light',
      attributeName: 'data-pui-mode'
    })
  ]
};

// export const decorators = [
//   withThemeByDataAttribute({
//     themes: {
//       light: 'light',
//       dark: 'dark'
//     },
//     defaultTheme: 'light',
//     attributeName: 'data-pui-mode'
//   })
// ];

export default preview;
