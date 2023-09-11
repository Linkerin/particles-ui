import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Particles UI',
  brandUrl: 'https://particles.snipshot.dev',
  brandImage: '/pui-storybook-logo.svg',
  brandTarget: '_blank'
});

addons.setConfig({
  theme
});
