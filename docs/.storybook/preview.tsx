import React from 'react';

import PuiTheme from '../src/theme/PuiTheme';

import '../src/styles/pui-base.scss';
import './storybook.css';

import type { Preview } from '@storybook/react';

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
    )
  ]
};

export const parameters = {
  darkMode: {
    stylePreview: true
  }
};

export default preview;