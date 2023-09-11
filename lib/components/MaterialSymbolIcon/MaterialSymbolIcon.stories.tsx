import type { Meta, StoryObj } from '@storybook/react';

import MaterialSymbolIcon from './MaterialSymbolIcon';

const meta: Meta<typeof MaterialSymbolIcon> = {
  title: 'Components/Icon/Material Symbol Icon',
  component: MaterialSymbolIcon,
  tags: ['autodocs'],
  args: { role: 'presentation' },
  render: args => (
    <div style={{ fontSize: '2rem' }}>
      <MaterialSymbolIcon {...args} />
    </div>
  )
};

export default meta;
type Story = StoryObj<typeof MaterialSymbolIcon>;

export const Default: Story = {
  args: {
    icon: 'rocket'
  }
};

export const UsingCode: Story = {
  args: {
    code: 'e559',
    style: { color: 'var(--pui-color-tertiary, #e58a1a)' }
  }
};
