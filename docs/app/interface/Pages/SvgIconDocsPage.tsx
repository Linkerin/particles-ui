import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import { Divider, Heading, SvgIcon } from '../../../../src';

import AtomIcon from '@/public/atom.svg';

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

function SvgIconDocsPage() {
  return (
    <DemoSection>
      <Heading as="h1" variant="h4">
        SvgIcon Component
      </Heading>
      <DemoContainer>
        <SvgDemoContainer>
          <Heading variant="h6">20px (small)</Heading>
          <SvgIcon src={AtomIcon.src} id="atom" size={20} />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <Heading variant="h6">24px (medium)</Heading>
          <SvgIcon
            src={AtomIcon.src}
            id="atom"
            size={24}
            color="var(--pui-primary)"
          />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <Heading variant="h6">40px (large)</Heading>
          <SvgIcon src={AtomIcon.src} id="atom" size={40} />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <Heading variant="h6">48px (x-large)</Heading>
          <SvgIcon src={AtomIcon.src} id="atom" size={48} color="green" />
        </SvgDemoContainer>
      </DemoContainer>
    </DemoSection>
  );
}

export default SvgIconDocsPage;
