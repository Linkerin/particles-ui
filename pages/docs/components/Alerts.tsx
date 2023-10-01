import { Alert, AlertProps } from '../../../lib/components/Alert/Alert';
import { Button } from '../../../lib/components/Button/Button';
import DemoContainer from '../../../app/interface/docs/components/DemoContainer/DemoContainer';

const variants: Array<AlertProps['variant']> = [
  'filled',
  'outlined',
  'soft',
  'minimal'
];

const colors: Array<AlertProps['color']> = [
  'success',
  'info',
  'warning',
  'error',
  'primary',
  'secondary',
  'tertiary'
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

export function AlertDefault() {
  return (
    <DemoContainer>
      <Alert
        heading="Message sent"
        closeButtonLabel="Close alert"
        onClose={e => console.log('Close alert')}
      >
        Thank you, we will reply to you soon!
      </Alert>
    </DemoContainer>
  );
}

export function AlertColors() {
  return colors.map(color => (
    <DemoContainer key={color}>
      <Alert
        heading={`Color: '${color}'`}
        closeButtonLabel="Close alert"
        onClose={e => console.log('Close alert')}
        color={color}
      >
        Thank you, we will reply to you soon!
      </Alert>
    </DemoContainer>
  ));
}

export function AlertVariants() {
  return variants.map(variant => (
    <DemoContainer key={variant}>
      <Alert
        heading={`Variant: ${variant}`}
        closeButtonLabel="Close alert"
        onClose={e => console.log('Close alert')}
        variant={variant}
      >
        Thank you, we will reply to you soon!
      </Alert>
    </DemoContainer>
  ));
}

export function AlertRadiuses() {
  return radiuses.map(radius => (
    <DemoContainer key={radius}>
      <Alert
        heading={`Radius: ${radius}`}
        closeButtonLabel="Close alert"
        variant="outlined"
        color="primary"
        radius={radius}
      >
        Thank you, we will reply to you soon!
      </Alert>
    </DemoContainer>
  ));
}

export function AlertActionElement() {
  return (
    <Alert
      actionElement={
        <Button
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            lineHeight: '1rem',
            padding: '0.375rem 1em'
          }}
          color="info"
          size="sm"
          variant="soft"
          dense
        >
          Undo
        </Button>
      }
      closeButtonLabel="Close alert"
      color="info"
      onClose={e => console.log('Close alert')}
    >
      You have submitted the form
    </Alert>
  );
}

export function AlertWithEmoji() {
  return (
    <Alert
      actionElement={
        <Button
          color="secondary"
          variant="filled"
          style={{
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '1.25rem',
            marginLeft: '0.5rem',
            padding: '0.5625rem 1.714286em'
          }}
        >
          Accept
        </Button>
      }
      closeButtonLabel="Close alert"
      color="secondary"
      heading="We use cookies"
      icon="🍪"
    >
      Accept out Privacy and Cookie Policy
    </Alert>
  );
}
