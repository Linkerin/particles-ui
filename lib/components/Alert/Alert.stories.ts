import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs']
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    color: 'info',
    variant: 'minimal',
    heading: "Let's get to know each other?",
    children: 'You may sign in and become a member of our community'
  }
};
