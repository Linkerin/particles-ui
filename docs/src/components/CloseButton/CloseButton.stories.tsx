import type { Meta, StoryObj } from '@storybook/react';

import { CloseButton, CloseButtonProps } from './CloseButton';

const defaultProps: CloseButtonProps = {
  'aria-label': 'Close',
  loadingSpinner: true
};

const meta = {
  title: 'Components/IconButton/Close Button',
  component: CloseButton,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    loadingElement: { control: { disable: true } }
  }
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <CloseButton {...args} />
};
