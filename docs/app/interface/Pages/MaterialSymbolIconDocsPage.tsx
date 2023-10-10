import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import { Divider } from '@/src/components/Divider/Divider';
import { Heading } from '@/src/components/Heading/Heading';
import { MaterialSymbolIcon } from '@/src/components/MaterialSymbolIcon/MaterialSymbolIcon';
import { Text } from '@/src/components/Text/Text';

function SvgDemoContainer({
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

function MaterialSymbolIconDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        MaterialSymbolIcon Component
      </Heading>
      <DemoContainer>
        <SvgDemoContainer style={{ fontSize: '1.25rem' }}>
          <Text size="lg">1.25rem</Text>
          <MaterialSymbolIcon icon="home" />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer
          style={{ color: 'var(--pui-primary)', fontSize: '1.5rem' }}
        >
          <Text size="lg">1.5rem</Text>
          <MaterialSymbolIcon icon="home" />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer style={{ fontSize: '2.5rem' }}>
          <Text size="lg">2.5rem</Text>
          <MaterialSymbolIcon code="e8b8" />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer style={{ fontSize: '3rem' }}>
          <Text size="lg">3 rem</Text>
          <MaterialSymbolIcon icon="home" />
        </SvgDemoContainer>
      </DemoContainer>
    </DemoSection>
  );
}

export default MaterialSymbolIconDocsPage;
