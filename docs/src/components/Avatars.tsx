import DocsSandpack, {
  DocsSandPackProps
} from '../interface/DocsSandpack/DocsSandpack';

const styles = `{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap',
      }`;

const avatarProps = {
  src: 'https://thispersondoesnotexist.com/',
  alt: 'Random avatar image'
};

type DemoProps = Omit<DocsSandPackProps, 'files'>;

export function AvatarDefault(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarDefault() {
  return <Avatar src="${avatarProps.src}" alt="${avatarProps.alt}" />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarName(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarName() {
  return <Avatar name="Maria Guzman" alt="Maria Guzman avatar" />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarBordered(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarBordered() {
  return <Avatar bordered name="John Dorian" alt="John Doe avatar" />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarColors(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarColors() {
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
        <Avatar
          key={color}
          color={color}
          src="${avatarProps.src}"
          alt="${avatarProps.alt}"
          size="lg"
          bordered
        />
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

export function AvatarSizes(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarSizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

  return (
    <div
      style={${styles}}
    >
      {sizes.map(size => (
        <Avatar
          key={size}
          size={size}
          src="${avatarProps.src}"
          alt="${avatarProps.alt}" />
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

export function AvatarRadiuses(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarRadiuses() {
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
        <Avatar
          key={radius}
          radius={radius}
          src="${avatarProps.src}"
          alt="${avatarProps.alt}"
          color="secondary"
          size="lg"
          bordered
        />
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

export function AvatarDisabled(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarDisabled() {
  return <Avatar
           src="${avatarProps.src}"
           alt="${avatarProps.alt}"
           color="tertiary"
           size="xl"
           bordered
           disabled
         />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarIcon(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarIcon() {
  return <Avatar
           name="John Doe"
           alt="John Doe avatar"
           color="info"
           icon="default"
           bordered
         />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarPolymorphic(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar } from '@snipshot/particles';

export default function AvatarPolymorphic() {
  return <Avatar as="span" name="John Doe" alt="John Doe avatar" />;
}
`
      }}
      {...props}
    />
  );
}

export function AvatarGroup(props: DemoProps) {
  return (
    <DocsSandpack
      files={{
        '/Avatar.jsx': `import { Avatar, AvatarGroup } from '@snipshot/particles';

export default function AvatarGroupDemo() {
  return (
    <AvatarGroup max={3}>
      <Avatar name="John Doe" alt="John Doe avatar" bordered />
      <Avatar name="Maria Gonzales" alt="Maria Gonzales avatar" color="secondary" bordered />
      <Avatar name="Bobby Jackson" alt="Bobby Jackson avatar" color="tertiary" bordered />
      <Avatar name="Cheng Li" alt="Cheng Li avatar" />
      <Avatar name="Wolf Schmidt" alt="Wolf Schmidt avatar" />
    </AvatarGroup>
  );
}
`
      }}
      {...props}
    />
  );
}
