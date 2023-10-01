import { Meta, StoryObj } from '@storybook/react';
import { IconBell, IconPencil } from '@tabler/icons-react';

import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { Badge, BadgeProps } from './Badge';

const badgeInlineProps: Partial<BadgeProps> = {
  color: 'primary',
  invisible: false,
  outlined: false,
  radius: 'lg',
  singleElement: false,
  size: 'md',
  variant: 'filled'
};

const defaultProps: BadgeProps = {
  ...badgeInlineProps,
  'aria-label': 'Badge demo',
  vertical: 'top',
  horizontal: 'right',
  shape: 'rectangle',
  content: '9'
};

const avatarProps: AvatarProps = {
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
  title: 'Components/Badge/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    shape: 'circle',
    singleElement: true
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} />
    </Badge>
  )
};

export const RectangleBase: Story = {
  args: {
    color: 'secondary',
    shape: 'rectangle',
    variant: 'filled',
    singleElement: true
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} radius="xs" />
    </Badge>
  )
};

export const LeftBottomPosition: Story = {
  args: {
    color: 'error',
    shape: 'circle',
    size: 'sm',
    horizontal: 'left',
    vertical: 'bottom',
    singleElement: true
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} />
    </Badge>
  )
};

export const WithIcon: Story = {
  args: {
    color: 'warning',
    shape: 'rectangle',
    content: <IconPencil />,
    singleElement: true,
    size: 'lg'
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} radius="xs" size="xl" />
    </Badge>
  )
};

export const OnIcon: Story = {
  args: {
    color: 'info',
    content: 123,
    maxChars: 2,
    size: 'sm'
  },
  render: args => (
    <Badge {...args}>
      <IconBell />
    </Badge>
  )
};

export const TextContent: Story = {
  args: {
    color: 'warning',
    shape: 'circle',
    content: 'NEW',
    radius: 'xs'
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} size="lg" />
    </Badge>
  )
};

export const Outlined: Story = {
  args: {
    color: 'tertiary',
    content: 1354,
    maxChars: 3,
    outlined: true,
    shape: 'circle',
    size: 'sm'
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} size="lg" />
    </Badge>
  )
};

export const Dot: Story = {
  args: {
    color: 'success',
    shape: 'circle',
    size: 'dot',
    outlined: true
  },
  render: args => (
    <Badge {...args}>
      <Avatar {...avatarProps} />
    </Badge>
  )
};
