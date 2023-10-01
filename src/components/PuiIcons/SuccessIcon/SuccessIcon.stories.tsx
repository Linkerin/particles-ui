import type { Meta, StoryObj } from '@storybook/react';

import SuccessIcon from './SuccessIcon';

const meta = {
  title: 'Components/PuiIcon/SuccessIcon',
  component: SuccessIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof SuccessIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <SuccessIcon {...args}>&lt;h2&gt; heading</SuccessIcon>
};
