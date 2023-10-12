import DocsSandpack, {
  DocsSandPackProps
} from '../interface/DocsSandpack/DocsSandpack';

const styles = `{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }`;

type DemoProps = Pick<DocsSandPackProps, 'showCode' | 'showPreview'>;

export function ButtonDefault(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Button.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonDefault() {
  return <Button>Confirm</Button>;
}
`
      }}
      {...props}
    />
  );
}

export function ButtonVariants(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonVariants() {
  const variants = [
    'filled',
    'outlined',
    'soft',
    'text',
    'elevated'
  ];

  return (
    <div
      style={${styles}}
    >
      {variants.map(variant => (
        <Button key={variant} variant={variant}>
          {variant.at(0).toUpperCase() + variant.slice(1)}
        </Button>
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

export function ButtonColors(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonColors() {
  const colors = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'info',
    'warning',
    'error'
  ];

  return (
    <div
      style={${styles}}
    >
      {colors.map(color => (
        <Button key={color} color={color}>
          {color.at(0).toUpperCase() + color.slice(1)}
        </Button>
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

export function ButtonRadiuses(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonRadiuses() {
  const radiuses = [
    'none',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'full',
    'round'
  ];

  return (
    <div
      style={${styles}}
    >
      {radiuses.map(radius => (
        <Button key={radius} radius={radius} color="secondary">
          Radius: {radius}
        </Button>
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

export function ButtonSizes(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonSizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <div
      style={${styles}}
    >
      {sizes.map(size => (
        <Button key={size} size={size} color="tertiary">
          Size: {size}
        </Button>
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

export function ButtonSizesDense(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonSizesDense() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

  return (
    <div
      style={${styles}}
    >
      {sizes.map(size => (
        <Button key={size} size={size} dense>
          Size: {size}
        </Button>
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

export function ButtonWithIcons(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button, CloseIcon, UserIcon } from '@snipshot/particles';

export default function ButtonWithIcons() {
  return (
    <div
      style={${styles}}
    >
      <Button rightIcon={<UserIcon />}>
        Profile
      </Button>
      <Button
        leftIcon={<CloseIcon />}
        color="error"
        variant="outlined"
      >
        Remove
      </Button>
    </div>
  );
}
`
      }}
      {...props}
    />
  );
}

export function ButtonDisabled(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonDisabled() {
  return (
    <Button disabled>
      I am disabled
    </Button>
  );
}
`
      }}
      {...props}
    />
  );
}

export function ButtonLoading(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Buttons.jsx': `import { Button, RingSpinner } from '@snipshot/particles';

export default function ButtonLoading() {
  return (
    <div
      style={${styles}}
    >
      <Button loadingText="Loading..." isLoading>
        Send
      </Button>
      <Button
        loadingElement={<RingSpinner size="xs" />}
        isLoading
        variant="elevated"
        color="secondary"
      >
        Ring spinner
      </Button>
    </div>
  );
}
`
      }}
      {...props}
    />
  );
}

export function ButtonPolymorphic(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Button.jsx': `import { Button } from '@snipshot/particles';

export default function ButtonPolymorphic() {
  return <Button as="a">I am a link</Button>;
}
`
      }}
      {...props}
    />
  );
}
