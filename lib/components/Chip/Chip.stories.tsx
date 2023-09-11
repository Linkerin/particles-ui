import type { Meta, StoryObj } from '@storybook/react';
import { IconHeadphones, IconDeviceTv, IconSearch } from '@tabler/icons-react';

import Chip, { ChipProps } from './Chip';

const defaultProps: ChipProps = {
  disabled: false,
  color: 'primary',
  interactiveStyle: false,
  radius: 'sm',
  size: 'md',
  variant: 'outlined'
};

const icons = {
  headphones: <IconHeadphones />,
  seach: <IconSearch />,
  tv: <IconDeviceTv />
};

const iconControls = {
  options: Object.keys(icons),
  mapping: icons,
  control: { type: 'select' }
};

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    leftIcon: iconControls,
    rightIcon: iconControls,
    onClick: { action: 'Chip clicked' },
    onDelete: { action: 'Delete button clicked' }
  }
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: undefined,
    onDelete: undefined
  },
  render: args => <Chip {...args}>JavaScript</Chip>
};

export const Clickable: Story = {
  args: {
    color: 'secondary',
    variant: 'soft'
  },
  render: args => <Chip {...args}>Clickable chip</Chip>
};

export const Disabled: Story = {
  args: {
    disabled: true,
    onDelete: undefined,
    variant: 'filled'
  },
  render: args => <Chip {...args}>Disabled</Chip>
};

export const FullRadius: Story = {
  args: {
    leftIcon: <IconSearch />,
    onClick: undefined,
    onDelete: undefined,
    radius: 'full',
    variant: 'filled'
  },
  render: args => <Chip {...args}>Search</Chip>
};

export const IconWithDeleteButton: Story = {
  args: {
    color: 'tertiary',
    leftIcon: <IconHeadphones />,
    onClick: undefined,
    variant: 'elevated'
  },
  render: args => <Chip {...args}>Music</Chip>
};
