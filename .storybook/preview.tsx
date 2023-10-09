import React from 'react';
import type { Preview } from '@storybook/react';

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
    )
  ]
};

export default preview;
