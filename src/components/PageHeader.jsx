const PageHeader = ({ eyebrow, title, folio, children }) => (
  <header className="wrap animate-fade-up pt-12 md:pt-16">
    <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4">
      {eyebrow && <p className="kicker">{eyebrow}</p>}
      {folio && <p className="folio">{folio}</p>}
    </div>
    <hr className="rule-section" />
    <h1 className="display mt-10 max-w-4xl text-[2.5rem] sm:text-5xl md:text-6xl">
      {title}
    </h1>
    {children && (
      <div className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
        {children}
      </div>
    )}
  </header>
);

export default PageHeader;
