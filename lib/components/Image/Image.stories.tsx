import type { Meta, StoryObj } from '@storybook/react';

import Image, { ImageProps } from './Image';
import ImageFallback from '../ImageFallback/ImageFallback';

const defaultProps: ImageProps = {
  fadeInAnimation: false,
  preloadFallbackSrc: true,
  loading: 'lazy',
  src: 'https://loremflickr.com/320/240',
  alt: 'Random demo image',
  height: 240,
  width: 320
};

const meta = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    as: { control: { disable: true } },
    fallback: { control: { disable: true } },
    fallbackOnError: { control: { disable: true } }
  }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ alt, ...args }) => <Image {...args} alt={alt} />
};

export const WithFallbackSrc: Story = {
  name: 'With `fallbackSrc` prop',
  args: {
    fallbackSrc: 'https://via.placeholder.com/320x240',
    radius: 'xs',
    src: 'https://app.requestly.io/delay/3000/https://loremflickr.com/320/240'
  },
  render: ({ alt, ...args }) => <Image {...args} alt={alt} />
};

export const WithFallback: Story = {
  name: 'With `fallback` prop',
  args: {
    fadeInAnimation: true,
    fallback: <ImageFallback type="icon-loading" variant="outlined" />,
    radius: 'md',
    src: 'https://app.requestly.io/delay/3000/https://loremflickr.com/320/240'
  },
  render: ({ alt, ...args }) => <Image {...args} alt={alt} />
};

export const ErrorWithFallbackSrc: Story = {
  name: 'Error with `fallbackSrc` prop and no preload',
  args: {
    fallbackSrc: 'https://via.placeholder.com/320x240',
    fadeInAnimation: true,
    preloadFallbackSrc: false,
    radius: 'sm',
    src: 'https://app.requestly.io/delay/3000/broken'
  },
  render: ({ alt, ...args }) => <Image {...args} alt={alt} />
};

export const ErrorWithSeparateFallbacks: Story = {
  name: 'Error with separate fallbacks',
  args: {
    fallback: <ImageFallback type="icon-loading" variant="outlined" />,
    fallbackOnError: <ImageFallback type="icon-error" color="error" />,
    radius: 'sm',
    src: 'https://app.requestly.io/delay/3000/broken'
  },
  render: ({ alt, ...args }) => <Image {...args} alt={alt} />
};
