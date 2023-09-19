import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';
import { Text, TextProps } from '../Text/Text';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: { orientation: 'horizontal', subheader: '' }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        maxWidth: '25vw'
      }}
    >
      <Text>C++</Text>
      <Divider {...args} />
      <Text>Go</Text>
      <Divider {...args} />
      <Text>JavaScript</Text>
      <Divider {...args} />
      <Text>Python</Text>
      <Divider {...args} />
      <Text>Rust</Text>
      <Divider {...args} />
      <Text>Swift</Text>
    </div>
  )
};

export const Subheader: Story = {
  args: {
    subheader: 'Category'
  },
  render: args => {
    const textProps: TextProps = {
      size: 'lg',
      style: { marginLeft: '1rem' }
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          maxWidth: '25vw'
        }}
      >
        <Divider {...args} />
        <Text {...textProps}>Inbox</Text>
        <Text {...textProps}>Sent</Text>
        <Text {...textProps}>Trash</Text>
        <Divider {...args} />
        <Text {...textProps}>Settings</Text>
        <Text {...textProps}>Help</Text>
        <Text {...textProps}>Delete account</Text>
      </div>
    );
  }
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  render: args => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Text>About</Text>
      <Divider {...args} />
      <Text>Blog</Text>
      <Divider {...args} />
      <Text>Learn</Text>
      <Divider {...args} />
      <Text>Explore</Text>
      <Divider {...args} />
      <Text>Patters</Text>
    </div>
  )
};
