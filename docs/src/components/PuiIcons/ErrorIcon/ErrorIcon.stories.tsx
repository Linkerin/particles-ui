import type { Meta, StoryObj } from '@storybook/react';

import ErrorIcon from './ErrorIcon';

const meta = {
  title: 'Components/PuiIcon/ErrorIcon',
  component: ErrorIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof ErrorIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <ErrorIcon {...args}>&lt;h2&gt; heading</ErrorIcon>
};
