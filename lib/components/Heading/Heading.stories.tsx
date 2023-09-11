import type { Meta, StoryObj } from '@storybook/react';
import { IconHighlight } from '@tabler/icons-react';

import Heading, { HeadingProps } from './Heading';

const defaultProps: HeadingProps = {
  as: 'h2',
  color: 'on-background',
  truncate: false
};

const meta = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: { ...defaultProps }
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Heading {...args}>&lt;h2&gt; heading</Heading>
};

export const WithIcon: Story = {
  args: {
    as: 'h5',
    variant: 'subtitle-lg',
    color: 'on-background-variant'
  },
  render: args => (
    <Heading {...args}>
      <IconHighlight /> &lt;h5&gt; heading, <i>&lsquo;subtitle-lg&rsquo;</i>{' '}
      style
    </Heading>
  )
};

export const Truncate: Story = {
  args: {
    as: 'h6',
    truncate: true,
    variant: 'subtitle-md',
    style: { width: '26ch' }
  },
  render: ({ ...args }) => (
    <Heading {...args}>
      This text truncates after {args.style?.width?.toString().slice(0, 2)}{' '}
      characters
    </Heading>
  )
};
