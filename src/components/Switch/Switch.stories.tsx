import { Meta, StoryObj } from '@storybook/react';

import { IconCheck, IconMoon, IconSunLow, IconX } from '@tabler/icons-react';

import { Switch, SwitchProps } from './Switch';

const defaultProps: SwitchProps = {
  color: 'primary',
  disabled: false,
  labelGap: 'md',
  labelPosition: 'left',
  labelProps: {},
  size: 'md',
  tabIndex: 0
};

const icons = {
  tick: <IconCheck />,
  cross: <IconX />,
  sun: <IconSunLow />,
  moon: <IconMoon />
};

const iconControls = {
  options: Object.keys(icons),
  mapping: icons,
  control: { type: 'select' }
};

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: { ...defaultProps },
  argTypes: {
    selectedIcon: iconControls,
    unselectedIcon: iconControls,
    labelElement: { control: { type: 'text' } }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Switch {...args} />
};

export const WithLabel: Story = {
  args: {
    color: 'success',
    labelElement: 'Share data',
    labelGap: 'lg'
  },
  render: args => <Switch {...args} />
};

export const Disabled: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
    labelElement: 'Disabled'
  },
  render: args => <Switch {...args} />
};

export const WithIcons: Story = {
  args: {
    color: 'tertiary',
    selectedIcon: <IconSunLow />,
    unselectedIcon: <IconMoon />,
    size: 'lg'
  },
  render: args => <Switch {...args} />
};
