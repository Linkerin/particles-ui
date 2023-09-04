'use client';

import Alert, { AlertProps } from '@/lib/components/Alert/Alert';
import Button, { ButtonProps } from '@/lib/components/Button/Button';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/lib/components/Heading/Heading';
import { IconHeart } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

const colors: Array<AlertProps['color']> = [
  'success',
  'info',
  'warning',
  'error',
  'primary',
  'secondary',
  'tertiary',
  'uncolored'
];

const radiuses: Array<AlertProps['radius']> = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'full'
];

const capitalise = ([first, ...rest]: string) => {
  return first.toUpperCase() + rest.join('');
};

function ActionElement({ color }: { color?: ButtonProps['color'] }) {
  return (
    <Button
      variant="soft"
      size="sm"
      color={color}
      style={{ fontWeight: 600 }}
      dense
    >
      Undo
    </Button>
  );
}

function AlertDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Alert Component
      </Heading>
      <Divider />
      <Heading variant="h6">Soft</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {colors.map(color => (
          <Alert
            key={color}
            heading={`${color && capitalise(color)}!`}
            color={color}
          >
            Here is an important message for you
          </Alert>
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Outlined</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {colors.map(color => (
          <Alert
            key={color}
            heading={`${color && capitalise(color)}!`}
            color={color}
            variant="outlined"
          >
            Here is an important message for you
          </Alert>
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Filled</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {colors.map(color => (
          <Alert
            key={color}
            heading={`${color && capitalise(color)}!`}
            color={color}
            variant="filled"
          >
            Here is an important message for you
          </Alert>
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Minimal</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {colors.map(color => (
          <Alert
            key={color}
            heading={`${color && capitalise(color)}!`}
            color={color}
            variant="minimal"
            radius="sm"
          >
            Here is an important message for you
          </Alert>
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        {radiuses.map(radius => (
          <Alert key={radius} heading={radius} color="success" radius={radius}>
            Here is an important message for you
          </Alert>
        ))}
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Other icons</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert heading="SvgIcon" color="secondary" icon={<GlobeIcon />}>
          Here is an important message for you
        </Alert>
        <Alert
          heading="Material Symbol icon"
          color="tertiary"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="filled"
        >
          Here is an important message for you
        </Alert>
        <Alert
          heading="Tabler icon"
          color="primary"
          icon={<IconHeart />}
          variant="outlined"
        >
          Here is an important message for you
        </Alert>
        <Alert heading="With emoji" color="info" icon={'🍪'} variant="soft">
          Here is an important message for you
        </Alert>
        <Alert
          heading="Without icon"
          color="success"
          icon={false}
          variant="minimal"
        >
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Actions</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert
          heading="onClose function"
          color="info"
          onClose={e => {
            console.log('Clicked alert close');
          }}
        >
          Here is an important message for you
        </Alert>
        <Alert
          heading="onClose function"
          color="warning"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="outlined"
        >
          Here is an important message for you
        </Alert>
        <Alert
          heading="onClose function"
          color="error"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="filled"
        >
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert
          heading="With action element"
          color="warning"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          actionElement={<ActionElement color="warning" />}
        >
          Here is an important message for you
        </Alert>
        <Alert
          heading="With action element"
          color="secondary"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="outlined"
          actionElement={<ActionElement color="secondary" />}
          headingProps={{ color: 'on-background' }}
          textProps={{ size: 'md' }}
        >
          Also checking text and title props
        </Alert>
        <Alert
          heading="With action element"
          color="success"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="filled"
          actionElement={<ActionElement color="success" />}
        >
          Here is an important message for you
          <br />
          Second line
          <br />
          Third line
        </Alert>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Without title</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert color="info" onClose={() => {}}>
          Here is an important message for you
        </Alert>
        <Alert color="warning" variant="outlined" onClose={() => {}}>
          Here is an important message for you
        </Alert>
        <Alert color="error" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert color="success" onClose={() => {}}>
          Here is an important message for you and it is a long one.
          <br />
          Some more text describing the issue. Wow, soooooo long.
          <br />
          And a bit more text here
        </Alert>
        <Alert
          color="tertiary"
          variant="outlined"
          onClose={() => {}}
          actionElement={<ActionElement color="tertiary" />}
        >
          Here is an important message for you
        </Alert>
        <Alert color="info" variant="minimal" onClose={() => {}}>
          Here is an important message for you
        </Alert>
      </DemoContainer>
    </DemoSection>
  );
}

export default AlertDocsPage;
