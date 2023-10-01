import type { Meta, StoryObj } from '@storybook/react';

import ExternalIcon from './ExternalIcon';

const meta = {
  title: 'Components/PuiIcon/ExternalIcon',
  component: ExternalIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof ExternalIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <ExternalIcon {...args}>&lt;h2&gt; heading</ExternalIcon>
};
