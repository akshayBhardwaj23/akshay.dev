import { ventures } from "../data/ventures";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Ventures = ({ heading = "Ventures", intro }) => (
  <section className="wrap pt-24">
    <p className="eyebrow mb-3">Beyond engineering</p>
    <h2 className="display text-4xl md:text-5xl">{heading}</h2>
    {intro && (
      <p className="mt-5 max-w-prose leading-relaxed text-muted">{intro}</p>
    )}

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {ventures.map((v) => (
        <div key={v.id} className="card flex flex-col p-7">
          <p className="eyebrow">{v.kind}</p>
          <p className="display mt-4 text-4xl text-accent">{v.metric}</p>
          <p className="mt-1 text-sm text-faint">{v.metricLabel}</p>
          <h3 className="mt-6 font-display text-2xl">{v.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {v.desc}
          </p>
          {v.link && (
            <a
              href={v.link}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-accent"
            >
              Visit <ArrowIcon />
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Ventures;
