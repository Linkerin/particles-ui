import type { Meta, StoryObj } from '@storybook/react';

import SvgIcon, { SvgIconProps } from './SvgIcon';

import atomSvg from '../../../.storybook/public/icons/atom.svg';

const defaultProps: Partial<SvgIconProps> = {
  role: 'presentation',
  size: '1em',
  strokeWidth: 2
};

const meta: Meta<typeof SvgIcon> = {
  title: 'Components/Icon/SVG Icon',
  component: SvgIcon,
  tags: ['autodocs'],
  args: { ...defaultProps },
  render: args => (
    <div style={{ fontSize: '2rem', color: 'var(--pui-secondary, #69aba5)' }}>
      <SvgIcon {...args} />
    </div>
  )
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: atomSvg.src,
    id: 'atom'
  }
};
