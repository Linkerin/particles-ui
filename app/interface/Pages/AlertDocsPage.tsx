'use client';

import Alert from '@/app/_components/Alert/Alert';
import Button, { ButtonProps } from '@/app/_components/Button/Button';
import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/app/_components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/app/_components/Heading/Heading';
import { IconHeart } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/app/_components/MaterialSymbolIcon/MaterialSymbolIcon';

function ActionElement({ color }: { color?: ButtonProps['color'] }) {
  return (
    <Button variant="soft" size="sm" color={color}>
      UNDO
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
        <Alert alertTitle="Success!" color="success">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Info!" color="info">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Warning!" color="warning">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Error!" color="error">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Primary!" color="primary">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Secondary!" color="secondary">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Tertiary!" color="tertiary">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Uncolored!" color="uncolored">
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Heading variant="h6">Outlined</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert alertTitle="Success!" color="success" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Info!" color="info" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Warning!" color="warning" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Error!" color="error" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Primary!" color="primary" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Secondary!" color="secondary" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Tertiary!" color="tertiary" variant="outlined">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Uncolored!" color="uncolored" variant="outlined">
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Heading variant="h6">Filled</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert alertTitle="Success!" color="success" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Info!" color="info" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Warning!" color="warning" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Error!" color="error" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Primary!" color="primary" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Secondary!" color="secondary" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Tertiary!" color="tertiary" variant="filled">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Uncolored!" color="uncolored" variant="filled">
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Heading variant="h6">Radiuses</Heading>
      <DemoContainer>
        <Alert alertTitle="None" color="success" radius="none">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="X-small" color="success" radius="xs">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Small" color="success" radius="sm">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Medium" color="success" radius="md">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Large" color="success" radius="lg">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="X-Large" color="success" radius="xl">
          Here is an important message for you
        </Alert>
        <Alert alertTitle="Full" color="success" radius="full">
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Heading variant="h6">Other icons</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert alertTitle="SvgIcon" color="secondary" icon={<GlobeIcon />}>
          Here is an important message for you
        </Alert>
        <Alert
          alertTitle="Material Symbol icon"
          color="tertiary"
          icon={<MaterialSymbolIcon icon="rocket" />}
          variant="filled"
        >
          Here is an important message for you
        </Alert>
        <Alert
          alertTitle="Tabler icon"
          color="primary"
          icon={<IconHeart />}
          variant="outlined"
        >
          Here is an important message for you
        </Alert>
      </DemoContainer>
      <Heading variant="h6">Actions</Heading>
      <DemoContainer style={{ flexWrap: 'wrap' }}>
        <Alert
          alertTitle="onClose function"
          color="info"
          onClose={e => {
            console.log('Clicked alert close');
          }}
        >
          Here is an important message for you
        </Alert>
        <Alert
          alertTitle="onClose function"
          color="warning"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="outlined"
        >
          Here is an important message for you
        </Alert>
        <Alert
          alertTitle="onClose function"
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
          alertTitle="With action element"
          color="warning"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          actionElement={<ActionElement color="warning" />}
        >
          Here is an important message for you
        </Alert>
        <Alert
          alertTitle="With action element"
          color="secondary"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="outlined"
          actionElement={<ActionElement color="secondary" />}
          titleProps={{ color: 'on-background' }}
          textProps={{ size: 'md' }}
        >
          Also checking text and title props
        </Alert>
        <Alert
          alertTitle="With action element"
          color="success"
          onClose={e => {
            console.log('Clicked alert close');
          }}
          variant="filled"
          actionElement={<ActionElement color="success" />}
        >
          Here is an important message for you
        </Alert>
      </DemoContainer>
    </DemoSection>
  );
}

export default AlertDocsPage;
