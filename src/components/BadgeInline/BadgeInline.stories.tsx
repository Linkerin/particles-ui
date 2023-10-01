import { Meta, StoryObj } from '@storybook/react';

import { BadgeInline, BadgeInlineProps } from './BadgeInline';
import { Button } from '../Button/Button';

const defaultProps: Partial<BadgeInlineProps> = {
  color: 'primary',
  invisible: false,
  outlined: false,
  radius: 'lg',
  singleElement: false,
  size: 'md',
  variant: 'filled',
  'aria-label': 'BadgeInline demo',
  content: 20
};

const meta = {
  title: 'Components/Badge/BadgeInline',
  component: BadgeInline,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {}
} satisfies Meta<typeof BadgeInline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <Button variant="outlined" radius="full">
      Show messages <BadgeInline {...args} />
    </Button>
  )
};
