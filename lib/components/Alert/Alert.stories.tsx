import type { Meta, StoryObj } from '@storybook/react';
import { IconRocket } from '@tabler/icons-react';

import { Alert, AlertProps } from './Alert';
import { Button } from '../Button/Button';

const defaultProps: AlertProps = {
  closeButtonLabel: 'Close alert',
  color: 'success',
  icon: true,
  radius: 'sm',
  role: 'alert',
  variant: 'soft',
  heading: 'Message sent',
  headingProps: {},
  textProps: {}
};

const alertMsg = 'Thank you, we will reply to you soon!';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    actionElement: {
      control: {
        disable: true
      }
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Alert {...args}>{alertMsg}</Alert>
};

export const CustomIcon: Story = {
  args: {
    color: 'tertiary',
    icon: <IconRocket />,
    variant: 'outlined'
  },
  render: args => <Alert {...args}>{alertMsg}</Alert>
};

export const EmojiIcon: Story = {
  args: {
    color: 'info',
    icon: '🍪',
    variant: 'soft',
    heading: 'We use cookies',
    onClose: undefined,
    actionElement: (
      <Button variant="filled" color="info" style={{ marginLeft: '0.5rem' }}>
        Accept
      </Button>
    )
  },
  render: args => <Alert {...args}>Accept out Privacy and Cookie Policy</Alert>
};

export const WithoutIcon: Story = {
  args: {
    color: 'primary',
    variant: 'minimal',
    icon: false,
    onClose: undefined
  },
  argTypes: { onClose: { control: { disable: true } } },

  render: args => <Alert {...args}>{alertMsg}</Alert>
};

export const ActionElement: Story = {
  args: {
    color: 'warning',
    actionElement: (
      <Button variant="soft" color="warning" size="sm" dense>
        Undo
      </Button>
    ),
    variant: 'filled',
    heading: undefined
  },
  render: args => <Alert {...args}>{alertMsg}</Alert>
};
