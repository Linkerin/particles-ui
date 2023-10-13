import DocsSandpack, {
  DocsSandPackProps
} from '../interface/DocsSandpack/DocsSandpack';

type DemoProps = Omit<DocsSandPackProps, 'files'>;

const styles = `{
        display: 'flex',
        alignSelf: 'flex-start',
        flexDirection: 'column',
        gap: '0.5rem',
      }`;
export function AlertDefault(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Alert.jsx': `import { Alert } from '@snipshot/particles';

export default function AlertDefault() {
  return (
    <Alert
      heading="Message sent"
      closeButtonLabel="Close alert"
      onClose={() => console.log('Close alert')}
    >
      Thank you, we will reply to you soon!
    </Alert>
  );
}
`
      }}
      {...props}
    />
  );
}

export function AlertColors(props: DemoProps) {
  return (
    <DocsSandpack
      previewStyle={{ minHeight: '570px' }}
      codeStyle={{ minHeight: '570px' }}
      files={{
        '/Alert.jsx': `import { Alert } from '@snipshot/particles';

export default function AlertColors() {
  const colors = [
    'success',
    'info',
    'warning',
    'error',
    'primary',
    'secondary',
    'tertiary'
  ];

  return (
    <div
      style={${styles}}
    >
      {colors.map(color => (
        <Alert
          key={color}
          heading={\`Color: \${color}\`}
          closeButtonLabel="Close alert"
          onClose={() => console.log('Close alert')}
          color={color}
        >
          Thank you, we will reply to you soon!
        </Alert>
      ))}
    </div>
  );
}
`
      }}
      {...props}
    />
  );
}

export function AlertVariants(props: DemoProps) {
  return (
    <DocsSandpack
      previewStyle={{ minHeight: '350px' }}
      codeStyle={{ minHeight: '350px' }}
      files={{
        '/Alert.jsx': `import { Alert } from '@snipshot/particles';

export default function AlertVariants() {
  const variants = [
    'filled',
    'outlined',
    'soft',
    'minimal'
  ];

  return (
    <div
      style={${styles}}
    >
      {variants.map(variant => (
        <Alert
          key={variant}
          heading={\`Variant: \${variant}\`}
          closeButtonLabel="Close alert"
          onClose={() => console.log('Close alert')}
          variant={variant}
        >
          Thank you, we will reply to you soon!
        </Alert>
      ))}
    </div>
  );
}
`
      }}
      {...props}
    />
  );
}

export function AlertRadiuses(props: DemoProps) {
  return (
    <DocsSandpack
      previewStyle={{ minHeight: '570px' }}
      codeStyle={{ minHeight: '570px' }}
      files={{
        '/Alert.jsx': `import { Alert } from '@snipshot/particles';

export default function AlertRadiuses() {
  const radiuses = [
    'none',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'full'
  ];

  return (
    <div
      style={${styles}}
    >
      {radiuses.map(radius => (
        <Alert
          key={radius}
          heading={\`Radius: \${radius}\`}
          variant="outlined"
          color="primary"
          radius={radius}
        >
          Thank you, we will reply to you soon!
        </Alert>
      ))}
    </div>
  );
}
`
      }}
      {...props}
    />
  );
}

export function AlertActionElement(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Alert.jsx': `import { Alert, Button } from '@snipshot/particles';

export default function AlertActionElement() {
  return (
    <Alert
      actionElement={
        <Button
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
      onClose={() => console.log('Close alert')}
    >
      You have submitted the form
    </Alert>
  );
}
`
      }}
      {...props}
    />
  );
}

export function AlertWithEmoji(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Alert.jsx': `import { Alert, Button } from '@snipshot/particles';

export default function AlertWithEmoji() {
  return (
    <Alert
      actionElement={
        <Button
          color="secondary"
          variant="filled"
        >
          Accept
        </Button>
      }
      color="secondary"
      heading="We use cookies"
      icon="🍪"
    >
      Accept out Privacy and Cookie Policy
    </Alert>
  );
}
`
      }}
      {...props}
    />
  );
}
