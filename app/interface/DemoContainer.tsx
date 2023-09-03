import { DivElementProps } from '@/lib/lib/puiHTMLPropTypes';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  margin: '0.2rem 0'
};

function DemoContainer({ children, className, style }: DivElementProps) {
  return (
    <div className={className} style={{ ...containerStyle, ...style }}>
      {children}
    </div>
  );
}

export default DemoContainer;
