import '../lib/styles/pui-base.scss';
import './pui-globals.scss';
import './storybook.scss';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export const parameters = {
  darkMode: {
    stylePreview: true
  }
};

export default preview;
