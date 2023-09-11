import type { Meta, StoryObj } from '@storybook/react';
import {
  IconEdit,
  IconHeartFilled,
  IconMessage,
  IconTrash
} from '@tabler/icons-react';

import FloatingButton, { FloatingButtonProps } from './FloatingButton';
import DualSpinner from '../Spinner/DualSpinner/DualSpinner';
import RingSpinner from '../Spinner/RingSpinner/RingSpinner';

const defaultProps: Partial<FloatingButtonProps> = {
  color: 'primary',
  disabled: false,
  isLoading: false,
  loadingText: '',
  lowered: false,
  loadingSpinner: true,
  size: 'md',
  'aria-label': 'FloatingButton demo',
  title: 'Edit content'
};

const spinners = {
  dual: <DualSpinner data-pui-component="fab-load-spinner" />,
  ring: <RingSpinner data-pui-component="fab-load-spinner" />
};

const meta = {
  title: 'Components/FloatingButton',
  component: FloatingButton,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    onClick: { action: 'clicked' },
    loadingElement: {
      options: Object.keys(spinners),
      mapping: spinners,
      control: { type: 'select' }
    }
  }
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <FloatingButton {...args}>
      <IconEdit />
    </FloatingButton>
  )
};

export const Loading: Story = {
  args: {
    color: 'tertiary',
    isLoading: true,
    loadingText: 'Loading...'
  },
  render: args => (
    <FloatingButton {...args}>
      <IconEdit />
    </FloatingButton>
  )
};

export const Disabled: Story = {
  args: { disabled: true, color: 'warning' },
  render: args => (
    <FloatingButton {...args}>
      <IconHeartFilled />
    </FloatingButton>
  )
};

export const WithText: Story = {
  args: {
    color: 'secondary'
  },
  render: args => (
    <FloatingButton {...args}>
      <IconMessage /> New Message
    </FloatingButton>
  )
};

export const Rounded: Story = {
  args: {
    radius: 'round',
    color: 'error'
  },
  render: args => (
    <FloatingButton {...args}>
      <IconTrash />
    </FloatingButton>
  )
};
