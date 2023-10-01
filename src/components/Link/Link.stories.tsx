import { Meta, StoryObj } from '@storybook/react';
import { IconWorld } from '@tabler/icons-react';

import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody/CardBody';
import { Image } from '../Image/Image';
import { Link, LinkProps } from './Link';
import { Text } from '../Text/Text';

import linkOverlayStyles from '../../styles/util-classes/link-overlay.module.scss';

const defaultProps: LinkProps = {
  as: 'a',
  color: 'primary',
  externalIcon: true,
  isExternal: false,
  overlay: false,
  target: '_self',
  href: '#'
};

const meta = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  args: { ...defaultProps }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Link {...args}>Go to homepage</Link>
};

export const UnderlineOnHover: Story = {
  args: {
    underline: 'hover'
  },
  render: args => <Link {...args}>Go to homepage</Link>
};

export const External: Story = {
  args: {
    isExternal: true
  },
  render: args => <Link {...args}>Navigate to another website</Link>
};

export const WithIcon: Story = {
  render: args => (
    <Link {...args}>
      <IconWorld /> Go to maps
    </Link>
  )
};

export const Overlay: Story = {
  args: {
    overlay: true,
    underline: 'hover'
  },
  render: args => (
    <Card className={linkOverlayStyles.overlay} size="sm" variant="elevated">
      <CardBody gap="md">
        <Image
          src="https://loremflickr.com/320/240"
          alt="Random image"
          fadeInAnimation
          radius="sm"
          width={320}
          height={240}
        />
        <Text>The whole card is a link</Text>
        <Link {...args}>See more</Link>
      </CardBody>
    </Card>
  )
};
