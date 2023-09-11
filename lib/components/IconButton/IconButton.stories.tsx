import type { Meta, StoryObj } from '@storybook/react';
import {
  IconBookmark,
  IconHeart,
  IconSend,
  IconSettings,
  IconTrash
} from '@tabler/icons-react';

import IconButton, { IconButtonProps } from './IconButton';
import DualSpinner from '../Spinner/DualSpinner/DualSpinner';
import RingSpinner from '../Spinner/RingSpinner/RingSpinner';

const defaultProps: Partial<IconButtonProps> = {
  'aria-label': 'IconButton demo',
  color: 'primary',
  disabled: false,
  isLoading: false,
  loadingSpinner: true,
  radius: 'md',
  size: 'lg',
  variant: 'standard'
};

const spinners = {
  dual: <DualSpinner data-pui-component="btn-load-spinner" />,
  ring: <RingSpinner data-pui-component="btn-load-spinner" />
};

const icons = {
  bookmark: <IconBookmark />,
  heart: <IconHeart />,
  send: <IconSend />,
  settings: <IconSettings />,
  trash: <IconTrash />
};

const iconControls = {
  options: Object.keys(icons),
  mapping: icons,
  control: { type: 'select' }
};

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    onClick: { action: 'clicked' },
    icon: iconControls,
    loadingElement: {
      options: Object.keys(spinners),
      mapping: spinners,
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconBookmark />
  },
  render: args => <IconButton {...args} />
};

export const Loading: Story = {
  args: {
    color: 'secondary',
    icon: <IconSend />,
    isLoading: true,
    variant: 'soft'
  },
  render: args => <IconButton {...args} />
};

export const Disabled: Story = {
  args: {
    icon: <IconHeart />,
    disabled: true,
    variant: 'outlined'
  },
  render: args => <IconButton {...args} />
};

export const Rounded: Story = {
  args: {
    color: 'tertiary',
    icon: <IconSettings />,
    radius: 'round',
    variant: 'elevated'
  },
  render: args => <IconButton {...args} />
};
