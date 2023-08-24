function DemoSection({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
      {children}
    </section>
  );
}

export default DemoSection;
