import type { Meta, StoryObj } from '@storybook/react';
import { IconHeart, IconSend, IconTrash } from '@tabler/icons-react';

import { Button } from './Button';
import { buttonDefaultProps } from './Button.defaults';
import { DualSpinner } from '../Spinner/DualSpinner/DualSpinner';
import { RingSpinner } from '../Spinner/RingSpinner/RingSpinner';

const spinners = {
  dual: <DualSpinner data-pui-component="btn-load-spinner" />,
  ring: <RingSpinner data-pui-component="btn-load-spinner" />
};

const icons = {
  heart: <IconHeart />,
  send: <IconSend />,
  trash: <IconTrash />
};

const iconControls = {
  options: Object.keys(icons),
  mapping: icons,
  control: { type: 'select' }
};

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { ...buttonDefaultProps },
  argTypes: {
    leftIcon: iconControls,
    rightIcon: iconControls,
    onClick: { action: 'clicked' },
    loadingElement: {
      options: Object.keys(spinners),
      mapping: spinners,
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Button {...args}>Button</Button>
};

export const Loading: Story = {
  args: {
    isLoading: true,
    loadingText: 'Loading...',
    leftIcon: <IconTrash />,
    color: 'secondary'
  },
  render: args => <Button {...args}>Button</Button>
};

export const Disabled: Story = {
  args: {
    disabled: true,
    leftIcon: <IconTrash />,
    variant: 'outlined'
  },
  render: args => <Button {...args}>Button</Button>
};

export const FullRadius: Story = {
  args: {
    color: 'tertiary',
    radius: 'full',
    rightIcon: <IconSend />,
    variant: 'elevated'
  },
  render: args => <Button {...args}>Button</Button>
};

export const Dense: Story = {
  args: {
    dense: true,
    color: 'info',
    variant: 'soft'
  },
  render: args => <Button {...args}>Button</Button>
};
