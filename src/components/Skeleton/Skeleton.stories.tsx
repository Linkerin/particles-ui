import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {
  animation: 'pulse',
  fadeAnimation: true,
  fitContent: false,
  isLoaded: false,
  radius: 'xs'
};

const meta = {
  title: 'Components/Skeleton/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    animationDuration: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    width: { control: { type: 'text' } }
  },
  decorators: [
    Story => (
      <div style={{ width: 'min(250px, 50vw)' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Skeleton {...args} />
};

export const WaveAnimation: Story = {
  args: {
    animation: 'wave'
  },
  render: args => <Skeleton {...args} />
};

export const AvatarType: Story = {
  args: {
    type: 'avatar'
  },
  render: args => <Skeleton {...args} />
};

export const CustomShape: Story = {
  args: {
    height: '4rem',
    width: '8rem',
    radius: 'lg',
    animationDuration: '1s'
  },
  render: args => <Skeleton {...args} />
};
