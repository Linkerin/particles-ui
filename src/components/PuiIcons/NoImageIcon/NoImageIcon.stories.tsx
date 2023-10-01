import type { Meta, StoryObj } from '@storybook/react';

import NoImageIcon from './NoImageIcon';

const meta = {
  title: 'Components/PuiIcon/NoImageIcon',
  component: NoImageIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof NoImageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <NoImageIcon {...args}>&lt;h2&gt; heading</NoImageIcon>
};
