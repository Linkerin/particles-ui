import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonText, SkeletonTextProps } from './SkeletonText';

const defaultProps: SkeletonTextProps = {
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 'md',
  noOfLines: 3
};

const meta = {
  title: 'Components/Skeleton/SkeletonText',
  component: SkeletonText,
  tags: ['autodocs'],
  args: { ...defaultProps }
} satisfies Meta<typeof SkeletonText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <SkeletonText {...args} />
};
