import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import DualSpinner from '@/lib/components/Spinner/DualSpinner/DualSpinner';
import Heading from '@/lib/components/Heading/Heading';
import RingSpinner from '@/lib/components/Spinner/RingSpinner/RingSpinner';

function SpinnerContainer({
  children,
  style,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '1rem',
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function SpinnerDocsPage() {
  return (
    <DemoSection>
      <Heading variant="h6">Dual Spinner Component</Heading>
      <DemoContainer>
        <SpinnerContainer>
          <Heading variant="h6">X-Small</Heading>
          <DualSpinner size="xs" speed="0.3s" />
        </SpinnerContainer>
        <SpinnerContainer style={{ color: 'var(--pui-tertiary)' }}>
          <Heading variant="h6">Small</Heading>
          <DualSpinner size="sm" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">Medium</Heading>
          <DualSpinner size="md" speed="0.7s" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">Large</Heading>
          <DualSpinner size="lg" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">X-Large</Heading>
          <DualSpinner size="xl" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">XXL</Heading>
          <DualSpinner size="xxl" speed="3s" />
        </SpinnerContainer>
      </DemoContainer>
      <Heading variant="h6">Ring Spinner</Heading>
      <DemoContainer>
        <SpinnerContainer>
          <Heading variant="h6">X-Small</Heading>
          <RingSpinner size="xs" speed="0.3s" />
        </SpinnerContainer>
        <SpinnerContainer style={{ color: 'var(--pui-tertiary)' }}>
          <Heading variant="h6">Small</Heading>
          <RingSpinner size="sm" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">Medium</Heading>
          <RingSpinner size="md" speed="0.7s" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">Large</Heading>
          <RingSpinner size="lg" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">X-Large</Heading>
          <RingSpinner size="xl" />
        </SpinnerContainer>
        <SpinnerContainer>
          <Heading variant="h6">XXL</Heading>
          <RingSpinner size="xxl" speed="3s" />
        </SpinnerContainer>
      </DemoContainer>
    </DemoSection>
  );
}

export default SpinnerDocsPage;
