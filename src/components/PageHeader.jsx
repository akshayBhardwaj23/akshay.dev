const PageHeader = ({ eyebrow, title, children }) => (
  <header className="wrap animate-fade-up pb-12 pt-16 md:pb-16 md:pt-24">
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h1 className="display text-5xl md:text-7xl">{title}</h1>
    {children && (
      <div className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
        {children}
      </div>
    )}
  </header>
);

export default PageHeader;
