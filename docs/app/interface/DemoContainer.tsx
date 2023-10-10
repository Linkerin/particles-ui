const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  margin: '0.2rem 0'
};

function DemoContainer({
  children,
  className,
  style
}: React.ComponentProps<'div'>) {
  return (
    <div className={className} style={{ ...containerStyle, ...style }}>
      {children}
    </div>
  );
}

export default DemoContainer;
