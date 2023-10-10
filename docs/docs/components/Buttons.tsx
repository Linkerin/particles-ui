import { Button, ButtonProps } from '@snipshot/particles';
import CloseIcon from '../../src/components/PuiIcons/CloseIcon/CloseIcon';
import DemoContainer from '../interface/DemoContainer/DemoContainer';
import { RingSpinner } from '../../src/components/Spinner/RingSpinner/RingSpinner';
import UserIcon from '../../src/components/PuiIcons/UserIcon/UserIcon';

const variants: Array<ButtonProps['variant']> = [
  'filled',
  'outlined',
  'text',
  'soft',
  'elevated'
];

const colors: Array<ButtonProps['color']> = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'error'
];

const radiuses: Array<ButtonProps['radius']> = [
  'none',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'full',
  'round'
];

const sizes: Array<ButtonProps['size']> = ['xs', 'sm', 'md', 'lg', 'xl'];

export function ButtonDefault() {
  return (
    <DemoContainer>
      <Button as="span">Confirm</Button>
    </DemoContainer>
  );
}

export function ButtonVariants() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      {variants.map(variant => (
        <Button as="div" key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </DemoContainer>
  );
}

export function ButtonColors() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      {colors.map(color => (
        <Button as="span" key={color} color={color}>
          {color}
        </Button>
      ))}
    </DemoContainer>
  );
}

export function ButtonRadiuses() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      {radiuses.map(radius => (
        <Button as="span" key={radius} radius={radius} color="secondary">
          Radius: {radius}
        </Button>
      ))}
    </DemoContainer>
  );
}

export function ButtonSizes() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      {sizes.map(size => (
        <Button as="span" key={size} size={size} color="tertiary">
          Size: {size}
        </Button>
      ))}
    </DemoContainer>
  );
}

export function ButtonSizesDense() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      {sizes.map(size => (
        <Button as="span" key={size} size={size} dense>
          Size: {size}
        </Button>
      ))}
    </DemoContainer>
  );
}

export function ButtonWithIcons() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      <Button as="span" rightIcon={<UserIcon />}>
        Profile
      </Button>
      <Button
        as="span"
        leftIcon={<CloseIcon />}
        color="error"
        variant="outlined"
      >
        Remove
      </Button>
    </DemoContainer>
  );
}

export function ButtonDisabled() {
  return (
    <DemoContainer>
      <Button
        disabled
        style={{
          padding: '0.5625rem 1.714286em',
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: '1.25rem'
        }}
      >
        Disabled
      </Button>
    </DemoContainer>
  );
}

export function ButtonLoading() {
  return (
    <DemoContainer
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      <Button as="span" loadingText="Loading..." isLoading>
        Send
      </Button>
      <Button
        as="span"
        loadingElement={<RingSpinner size="xs" />}
        isLoading
        variant="elevated"
        color="secondary"
      >
        Ring spinner
      </Button>
    </DemoContainer>
  );
}

export function ButtonPolymorphic() {
  return (
    <DemoContainer>
      <Button as="a" style={{ color: 'var(--pui-btn-on-color)' }}>
        I am a link
      </Button>
    </DemoContainer>
  );
}
