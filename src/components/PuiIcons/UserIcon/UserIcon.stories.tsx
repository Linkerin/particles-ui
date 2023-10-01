import type { Meta, StoryObj } from '@storybook/react';

import UserIcon from './UserIcon';

const meta = {
  title: 'Components/PuiIcon/UserIcon',
  component: UserIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof UserIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <UserIcon {...args}>&lt;h2&gt; heading</UserIcon>
};
