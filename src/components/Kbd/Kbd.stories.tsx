import type { Meta, StoryObj } from '@storybook/react';

import glyphs from './glyphs';
import { Kbd } from './Kbd';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  args: { type: 'flat', truncate: false },
  argTypes: {
    glyph: {
      options: Object.keys(glyphs),
      control: { type: 'select' }
    },
    rightGlyph: {
      options: Object.keys(glyphs),
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    glyph: 'command'
  },
  render: args => <Kbd {...args}>K</Kbd>
};

export const GlyphsArray: Story = {
  args: {
    glyph: ['option', 'command']
  },
  argTypes: { glyph: { control: { disable: true } } },
  render: args => <Kbd {...args}>P</Kbd>
};

export const Dimensional: Story = {
  args: {
    type: 'dimensional'
  },
  render: args => (
    <div style={{ display: 'flex' }}>
      <Kbd {...args}>Ctrl</Kbd>
      <Text style={{ marginInline: '0.25rem' }}>+</Text>
      <Kbd {...args}>C</Kbd>
    </div>
  )
};
