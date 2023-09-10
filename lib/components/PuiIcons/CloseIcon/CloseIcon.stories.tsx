import type { Meta, StoryObj } from '@storybook/react';

import CloseIcon from './CloseIcon';

const meta = {
  title: 'Components/PuiIcon/CloseIcon',
  component: CloseIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof CloseIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <CloseIcon {...args}>&lt;h2&gt; heading</CloseIcon>
};
