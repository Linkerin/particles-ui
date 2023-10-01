import type { Meta, StoryObj } from '@storybook/react';

import WarningIcon from './WarningIcon';

const meta = {
  title: 'Components/PuiIcon/WarningIcon',
  component: WarningIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof WarningIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <WarningIcon {...args}>&lt;h2&gt; heading</WarningIcon>
};
