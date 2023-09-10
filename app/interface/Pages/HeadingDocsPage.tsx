import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import GlobeIcon from '../GlobeIcon';
import Heading from '@/lib/components/Heading/Heading';
import { IconBrandJavascript as JSIcon } from '@tabler/icons-react';
import MaterialSymbolIcon from '@/lib/components/MaterialSymbolIcon/MaterialSymbolIcon';

function HeadingDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Heading Component
      </Heading>
      <Divider />
      <Heading variant="h6" style={{ marginBottom: '0.5rem' }}>
        Variants
      </Heading>
      <>
        <Heading as="h1">h1 heading</Heading>
        <Heading>h2 heading</Heading>
        <Heading as="h3">h3 heading</Heading>
        <Heading as="h4">h4 heading</Heading>
        <Heading as="h5">h5 heading</Heading>
        <Heading as="h6">h6 heading</Heading>
        <Heading as="h6" variant="subtitle-lg">
          subtitle-lg as h6 heading
        </Heading>
        <Heading as="span">subtitle-md as span heading</Heading>
        <Heading as="h6" variant="subtitle-sm">
          subtitle-sm as h6 heading
        </Heading>
      </>
      <Divider />
      <Heading variant="h6">With icons</Heading>
      <DemoContainer>
        <div>
          <Heading as="h1">
            <GlobeIcon /> h1 heading
          </Heading>
          <Heading>
            <GlobeIcon /> h2 heading
          </Heading>
          <Heading as="h3">
            <GlobeIcon /> h3 heading
          </Heading>
          <Heading as="h4">
            <GlobeIcon /> h4 heading
          </Heading>
          <Heading as="h5">
            <GlobeIcon /> h5 heading
          </Heading>
          <Heading as="h6">
            <GlobeIcon /> h6 heading
          </Heading>
          <Heading as="h6" variant="subtitle-lg">
            <GlobeIcon /> subtitle-lg as h6 heading
          </Heading>
          <Heading as="span">
            <GlobeIcon /> subtitle-md as span heading
          </Heading>
          <Heading as="h6" variant="subtitle-sm">
            <GlobeIcon /> subtitle-sm as h6 heading
          </Heading>
        </div>
        <div>
          <Heading as="h1">
            <MaterialSymbolIcon icon="emoji_objects" /> h1 heading
          </Heading>
          <Heading>
            <MaterialSymbolIcon icon="emoji_objects" /> h2 heading
          </Heading>
          <Heading as="h3">
            <MaterialSymbolIcon icon="emoji_objects" /> h3 heading
          </Heading>
          <Heading as="h4">
            <MaterialSymbolIcon icon="emoji_objects" /> h4 heading
          </Heading>
          <Heading as="h5">
            <MaterialSymbolIcon icon="emoji_objects" /> h5 heading
          </Heading>
          <Heading as="h6">
            <MaterialSymbolIcon icon="emoji_objects" /> h6 heading
          </Heading>
          <Heading as="h6" variant="subtitle-lg">
            <MaterialSymbolIcon icon="emoji_objects" /> subtitle-lg as h6
            heading
          </Heading>
          <Heading as="span">
            <MaterialSymbolIcon icon="emoji_objects" /> subtitle-md as span
            heading
          </Heading>
          <Heading as="h6" variant="subtitle-sm">
            <MaterialSymbolIcon icon="emoji_objects" /> subtitle-sm as h6
            heading
          </Heading>
        </div>
        <div>
          <Heading as="h1">
            <JSIcon /> h1 heading
          </Heading>
          <Heading>
            <JSIcon /> h2 heading
          </Heading>
          <Heading as="h3">
            <JSIcon /> h3 heading
          </Heading>
          <Heading as="h4">
            <JSIcon /> h4 heading
          </Heading>
          <Heading as="h5">
            <JSIcon /> h5 heading
          </Heading>
          <Heading as="h6">
            <JSIcon /> h6 heading
          </Heading>
          <Heading as="h6" variant="subtitle-lg">
            <JSIcon /> subtitle-lg as h6 heading
          </Heading>
          <Heading as="span">
            <JSIcon /> subtitle-md as span heading
          </Heading>
          <Heading as="h6" variant="subtitle-sm">
            <JSIcon /> subtitle-sm as h6 heading
          </Heading>
        </div>
      </DemoContainer>
      <Divider />
      <Heading variant="h6">Truncate</Heading>
      <div style={{ width: '20ch' }}>
        <Heading variant="subtitle-md" truncate>
          Here is a long text that we want to truncate to 20 characters
        </Heading>
      </div>
      <Divider />
      <Heading variant="h6">Inherit variant</Heading>
      <div style={{ color: 'var(--pui-secondary, green)' }}>
        <Heading variant="subtitle-lg" color="inherit">
          Here is secondary color text with{' '}
          <Heading
            as="span"
            variant="inherit"
            style={{ color: 'var(--pui-tertiary)' }}
          >
            highlighted
          </Heading>{' '}
          text
        </Heading>
      </div>
      <Divider />
      <Heading variant="h6">Colors</Heading>
      <>
        <Heading as="span" color="on-background">
          <GlobeIcon /> On background
        </Heading>
        <Heading as="span" color="on-background-variant">
          <GlobeIcon /> On background variant
        </Heading>
      </>
    </DemoSection>
  );
}

export default HeadingDocsPage;
