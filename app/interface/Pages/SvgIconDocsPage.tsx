import DemoContainer from '../DemoContainer';
import DemoSection from '../DemoSection';
import Divider from '@/lib/components/Divider/Divider';
import SvgIcon from '@/lib/components/SvgIcon/SvgIcon';

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
      <h1>SvgIcon Component</h1>
      <DemoContainer>
        <SvgDemoContainer>
          <h2>20px (small)</h2>
          <SvgIcon src={AtomIcon.src} id="atom" size={20} />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <h2>24px (medium)</h2>
          <SvgIcon
            src={AtomIcon.src}
            id="atom"
            size={24}
            color="var(--pui-primary)"
          />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <h2>40px (large)</h2>
          <SvgIcon src={AtomIcon.src} id="atom" size={40} />
        </SvgDemoContainer>
        <Divider orientation="vertical" />
        <SvgDemoContainer>
          <h2>48px (x-large)</h2>
          <SvgIcon src={AtomIcon.src} id="atom" size={48} color="green" />
        </SvgDemoContainer>
      </DemoContainer>
    </DemoSection>
  );
}

export default SvgIconDocsPage;
