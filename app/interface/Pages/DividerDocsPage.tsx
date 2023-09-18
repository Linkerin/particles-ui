import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import Heading from '@/lib/components/Heading/Heading';

function DividerDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Divider Component
      </Heading>
      <Heading variant="h6">Horizontal variants</Heading>
      <DemoContainer style={{ flexDirection: 'column', gap: '1rem' }}>
        <Heading as="h3" variant="subtitle-md">
          Full
        </Heading>
        <Divider />
        <Heading as="h3" variant="subtitle-md">
          Inset
        </Heading>
        <Divider variant="inset" />
        <Heading as="h3" variant="subtitle-md">
          Middle
        </Heading>
        <Divider variant="middle" />
      </DemoContainer>
      <Heading variant="h6">With subheader</Heading>
      <DemoContainer style={{ flexDirection: 'column', gap: '1rem' }}>
        <Heading as="h3" variant="subtitle-md">
          Full
        </Heading>
        <Divider
          subheader="Subheader"
          subheaderProps={{ as: 'h3', className: 'test' }}
        />
        <Heading as="h3" variant="subtitle-md">
          Inset
        </Heading>
        <Divider subheader="Subheader" variant="inset" />
        <Heading as="h3" variant="subtitle-md">
          Middle
        </Heading>
        <Divider subheader="Subheader" variant="middle" />
      </DemoContainer>
      <Heading variant="h6">Vertical variants</Heading>
      <DemoContainer
        style={{
          alignItems: 'flex-start',
          flexDirection: 'row',
          gap: '1rem',
          border: '1px dashed var(--pui-primary-container)',
          height: '4rem',
          padding: '0.3rem'
        }}
      >
        <Heading as="h3" variant="subtitle-md">
          Full
        </Heading>
        <Divider orientation="vertical" />
        <Heading as="h3" variant="subtitle-md">
          Inset
        </Heading>
        <Divider orientation="vertical" variant="inset" />
        <Heading as="h3" variant="subtitle-md">
          Middle
        </Heading>
        <Divider orientation="vertical" variant="middle" />
      </DemoContainer>
    </DemoSection>
  );
}

export default DividerDocsPage;
