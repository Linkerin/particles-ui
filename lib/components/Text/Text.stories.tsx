import type { Meta, StoryObj } from '@storybook/react';
import { IconSearch } from '@tabler/icons-react';

import { Text, TextProps } from './Text';

const defaultProps: TextProps = {
  as: 'p',
  color: 'inherit',
  size: 'md',
  truncate: false,
  variant: 'body'
};

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: { ...defaultProps }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Text {...args}>Some default text</Text>
};

export const WithIcon: Story = {
  args: {
    color: 'on-background-variant',
    size: 'lg'
  },
  render: args => (
    <Text {...args}>
      Large text with an icon - <IconSearch /> - inside
    </Text>
  )
};

export const Truncate: Story = {
  args: {
    as: 'blockquote',
    truncate: true,
    variant: 'label',
    style: { width: '31ch' }
  },
  render: ({ ...args }) => (
    <Text {...args}>
      This label text truncates after{' '}
      {args.style?.width?.toString().slice(0, 2)} characters
    </Text>
  )
};

export const RenderingElements: Story = {
  argTypes: {
    as: { control: { disable: true } }
  },
  render: ({ as, ...args }) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: '20vw' }}>
      <Text {...args} as="p">
        Paragraph
      </Text>
      <Text {...args} as="span">
        span
      </Text>
      <Text {...args} as="b">
        Bold
      </Text>
      <Text {...args} as="i">
        Italic
      </Text>
      <Text {...args} as="u">
        Underline
      </Text>
      <Text {...args} as="abbr">
        ABBR
      </Text>
      <Text {...args} as="code">
        &lt;code here /&gt;
      </Text>
      <Text {...args} as="cite">
        Citation
      </Text>
      <Text {...args} as="blockquote">
        Quote
      </Text>
      <Text {...args} as="del">
        Deleted
      </Text>
      <Text {...args} as="em">
        Emphasis
      </Text>
      <Text {...args} as="ins">
        Inserted
      </Text>
      <Text {...args} as="kbd">
        Ctrl + C
      </Text>
      <Text {...args} as="mark">
        Highlighted
      </Text>
      <Text {...args} as="s">
        Strikethrough
      </Text>
      <Text {...args} as="samp">
        Sample
      </Text>
      <Text {...args} as="sub">
        sub
      </Text>
      <Text {...args} as="sup">
        sup
      </Text>
    </div>
  )
};
