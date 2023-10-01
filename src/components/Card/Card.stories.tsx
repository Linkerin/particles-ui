import { Meta, StoryObj } from '@storybook/react';

import { IconShare } from '@tabler/icons-react';

import { Button } from '../Button/Button';
import { Card, CardProps } from './Card';
import { CardBody } from './CardBody/CardBody';
import { CardHeader } from './CardHeader/CardHeader';
import { CardFooter } from './CardFooter/CardFooter';
import { Heading } from '../Heading/Heading';
import { IconButton } from '../IconButton/IconButton';
import { Image } from '../Image/Image';
import { ImageIconFallback } from '../ImageIconFallback/ImageIconFallback';
import { Text } from '../Text/Text';

import sneakersPng from '../../../.storybook/public/sneakers.png';

const defaultProps: Partial<CardProps> = {
  disabled: false,
  interactiveStyle: false,
  flexDirection: 'column',
  padding: true,
  size: 'md',
  variant: 'filled'
};

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: { ...defaultProps, style: { maxWidth: '25vw' } }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Card {...args}>
      <CardHeader>
        <Heading variant="h4">Kea</Heading>
      </CardHeader>
      <CardBody gap="lg">
        <Text>
          The kea is a species of large parrot found in the forested and alpine
          regions of the South Island of New Zealand. Kea are known for their
          intelligence and curiosity.
        </Text>
        <Text>
          Now uncommon, the kea was once killed for bounty due to concerns by
          the sheep-farming community that it attacked livestock, especially
          sheep.
        </Text>
      </CardBody>
      <CardFooter>
        <Button radius="full">Learn more</Button>
        <IconButton icon={<IconShare />} aria-label="Share" />
      </CardFooter>
    </Card>
  )
};

export const WithImage: Story = {
  args: {
    variant: 'elevated'
  },
  render: args => (
    <Card {...args}>
      <CardHeader
        padding={false}
        flexDirection="column"
        alignItems="flex-start"
        style={{ fontSize: '0px' }}
      >
        <Image
          alt="Commom raven of North America in flight"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/3782_Common_Raven_in_flight.jpg/1920px-3782_Common_Raven_in_flight.jpg"
          fadeInAnimation={true}
          fallback={<ImageIconFallback icon="loading" color="primary" />}
          radius="md"
        />
      </CardHeader>
      <CardBody gap="md">
        <Heading variant="h5">Raven</Heading>
        <Text size="sm">
          A raven is any of several larger-bodied passerine bird species in the
          genus Corvus. There is no consistent distinction between
          &quot;crows&quot; and &quot;ravens&quot;, common names which are
          assigned to different species chiefly based on their size.
        </Text>
      </CardBody>
      <CardFooter>
        <Button radius="full" variant="elevated">
          Learn more
        </Button>
        <IconButton icon={<IconShare />} aria-label="Share" />
      </CardFooter>
    </Card>
  )
};

export const Clickable: Story = {
  args: {
    'aria-label': 'Go to sneakers page',
    variant: 'elevated',
    onClick: e => console.log('Card clicked')
  },
  render: args => (
    <Card {...args}>
      <CardHeader
        padding={false}
        flexDirection="column"
        alignItems="flex-start"
        style={{ fontSize: '0px' }}
      >
        <Image
          alt="Commom raven of North America in flight"
          src={sneakersPng.src}
          fadeInAnimation={true}
          fallback={<ImageIconFallback icon="loading" color="primary" />}
          radius="md"
          height={150}
          width={225}
        />
      </CardHeader>
      <CardBody justifyContent="space-between" gap="xs">
        <Heading as="span" variant="subtitle-md">
          Sneakers
        </Heading>
        <Text color="on-background-low" size="sm">
          $40.00
        </Text>
      </CardBody>
    </Card>
  )
};

export const WithDividers: Story = {
  args: {
    variant: 'outlined',
    size: 'sm'
  },
  render: args => (
    <Card {...args}>
      <CardHeader
        divider="middle"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Heading variant="h5">John Doe</Heading>
        <Heading as="span" variant="subtitle-sm" color="on-background-low">
          Web Developer
        </Heading>
      </CardHeader>
      <CardBody>
        <Text as="blockquote">
          I believe that creating useful and powerful applications is not just
          about routine tasks and technical knowledge but also involves a
          creative attitude, inspiration and real passion.
        </Text>
      </CardBody>
      <CardFooter divider="middle">
        <Button radius="lg" variant="soft">
          To profile page
        </Button>
      </CardFooter>
    </Card>
  )
};
