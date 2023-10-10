import type { Meta, StoryObj } from '@storybook/react';

import InfoIcon from './InfoIcon';

const meta = {
  title: 'Components/PuiIcon/InfoIcon',
  component: InfoIcon,
  tags: ['autodocs'],
  args: { role: 'presentation', size: '1em', strokeWidth: 2 }
} satisfies Meta<typeof InfoIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <InfoIcon {...args}>&lt;h2&gt; heading</InfoIcon>
};
