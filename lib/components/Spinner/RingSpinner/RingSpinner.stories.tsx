import type { Meta, StoryObj } from '@storybook/react';

import { RingSpinner } from './RingSpinner';

const meta = {
  title: 'Components/Spinner/RingSpinner',
  component: RingSpinner,
  tags: ['autodocs'],

  argTypes: {
    speed: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof RingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg'
  },
  render: args => (
    <div style={{ color: 'var(--pui-primary, #5e68ba)' }}>
      <RingSpinner {...args} />
    </div>
  )
};
