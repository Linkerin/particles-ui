import type { Meta, StoryObj } from '@storybook/react';

import LoadImageIcon from './LoadImageIcon';

const meta = {
  title: 'Components/PuiIcon/LoadImageIcon',
  component: LoadImageIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof LoadImageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <LoadImageIcon {...args}>&lt;h2&gt; heading</LoadImageIcon>
};
