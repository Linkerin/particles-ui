import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import { Heading, Kbd, Text } from '../../../../src';

function KbdDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        Kbd Component
      </Heading>
      <Heading variant="h6">Flat type</Heading>
      <DemoContainer>
        <Kbd>Ctrl + C</Kbd>
        <Kbd glyph="command">P</Kbd>
        <Kbd glyph={['option', 'command']}>K</Kbd>
        <Kbd glyph={['option', 'command', 'right']} />
      </DemoContainer>
      <Heading variant="h6">Dimensional type</Heading>
      <DemoContainer>
        <div style={{ display: 'flex' }}>
          <Kbd type="dimensional">Ctrl</Kbd>
          <Text style={{ marginInline: '0.25rem' }}>+</Text>
          <Kbd type="dimensional">C</Kbd>
        </div>
        <Kbd type="dimensional" glyph="command">
          P
        </Kbd>
        <Kbd type="dimensional" glyph={['option', 'command']}>
          K
        </Kbd>
        <Kbd type="dimensional" glyph={['option', 'command', 'right']} />
      </DemoContainer>
    </DemoSection>
  );
}

export default KbdDocsPage;
