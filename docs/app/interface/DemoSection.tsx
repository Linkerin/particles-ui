function DemoSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        color: 'var(--pui-on-background) '
      }}
    >
      {children}
    </section>
  );
}

export default DemoSection;
