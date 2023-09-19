import type { Meta, StoryObj } from '@storybook/react';

import { DualSpinner } from './DualSpinner';

const meta = {
  title: 'Components/Spinner/DualSpinner',
  component: DualSpinner,
  tags: ['autodocs'],

  argTypes: {
    speed: {
      control: { type: 'text' }
    }
  }
} satisfies Meta<typeof DualSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'lg'
  },
  render: args => (
    <div style={{ color: 'var(--pui-primary, #5e68ba)' }}>
      <DualSpinner {...args} />
    </div>
  )
};
