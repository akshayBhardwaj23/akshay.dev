import { ventures } from "../data/ventures";

const Ventures = ({ heading = "Ventures", intro }) => (
  <section className="wrap pt-24">
    <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4">
      <p className="kicker">Beyond engineering</p>
      <p className="folio">{heading}</p>
    </div>
    <hr className="rule-section" />

    {intro && (
      <p className="mt-8 max-w-prose leading-relaxed text-muted">{intro}</p>
    )}

    <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
      {ventures.map((v) => (
        <div key={v.id} className="flex flex-col bg-surface p-7">
          <p className="folio">{v.kind}</p>
          <p className="display mt-4 text-4xl tabular-nums text-accent">{v.metric}</p>
          <p className="folio mt-1 normal-case tracking-normal">{v.metricLabel}</p>
          <h3 className="display mt-6 text-2xl">{v.name}</h3>
          <p className="mt-3 flex-1 leading-relaxed text-muted">{v.desc}</p>
          {v.link && (
            <a
              href={v.link}
              target="_blank"
              rel="noreferrer noopener"
              className="link-rule mt-5 self-start font-sans text-sm"
            >
              Visit
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Ventures;
