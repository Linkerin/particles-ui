import type { Meta, StoryObj } from '@storybook/react';
import { IconBallBasketball } from '@tabler/icons-react';

import Avatar, { AvatarProps } from './Avatar';
import AvatarGroup from '../AvatarGroup/AvatarGroup';

const defaultProps: AvatarProps = {
  alt: 'Random avatar image',
  color: 'primary',
  radius: 'full',
  size: 'md',
  disabled: false,
  bordered: false,
  name: 'John Doe',
  fadeInAnimation: true,
  preloadFallbackSrc: true,
  src: 'https://thispersondoesnotexist.com/'
};

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    as: { control: { disable: true } }
  }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Avatar {...args} />
};

export const Bordered: Story = {
  args: {
    bordered: true,
    color: 'secondary',
    size: 'lg'
  },
  render: args => <Avatar {...args} />
};

export const InitialsOnly: Story = {
  args: {
    bordered: true,
    src: undefined,
    name: 'Han Solo'
  },
  render: args => <Avatar {...args} />
};

export const WithIcon: Story = {
  args: {
    color: 'tertiary',
    icon: <IconBallBasketball />
  },
  render: args => <Avatar {...args} />
};

export const DefaultIconFallback: Story = {
  args: {
    name: '',
    icon: 'default',
    src: 'https://app.requestly.io/delay/1000/broken'
  },
  render: args => <Avatar {...args} />
};

export const Disabled: Story = {
  args: {
    bordered: true,
    disabled: true
  },
  render: args => <Avatar {...args} />
};

export const SmallRadius: Story = {
  args: {
    bordered: true,
    color: 'info',
    radius: 'sm',
    size: 'xxl'
  },
  render: args => <Avatar {...args} />
};

export const Group: Story = {
  name: 'Avatar Group',
  parameters: { controls: { disable: true } },
  render: ({ ...args }) => (
    <div style={{ display: 'flex' }}>
      <AvatarGroup max={3}>
        <Avatar src="https://i.pravatar.cc/150" alt="Random avatar" />
        <Avatar src="https://i.pravatar.cc/200" alt="Random avatar" />
        <Avatar src="https://i.pravatar.cc/250" alt="Random avatar" />
        <Avatar {...args} />
        <Avatar {...args} />
      </AvatarGroup>
    </div>
  )
};
