import {
  awards,
  education,
  experience,
  skillGroups,
} from "../data/resume";
import { projects } from "../data/projects";
import { ventures } from "../data/ventures";
import { site, socials } from "../data/site";
import { useMeta } from "../hooks/useMeta";

const Resume = () => {
  useMeta({
    title: "Résumé",
    description: `Résumé of ${site.name} — ${site.role} at National Australia Bank. Experience, skills, awards, education and selected projects.`,
    path: "/resume",
  });

  const highlights = projects.filter((p) => p.kind === "product");

  return (
    <div className="wrap max-w-prose pb-10 pt-16 md:max-w-3xl md:pt-24">
      {/* Actions — hidden when printing */}
      <div className="mb-12 flex flex-wrap gap-3 print:hidden">
        <a href={site.resumePdf} download className="btn-primary">
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="btn-ghost"
        >
          Print this page
        </button>
      </div>

      <article className="resume">
        <header className="border-b border-line pb-8">
          <h1 className="display text-5xl">{site.name}</h1>
          <p className="mt-2 text-lg text-accent">{site.role}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.phone}</span>
            <span>{site.location}</span>
            {socials
              .filter((s) => !s.url.startsWith("mailto:"))
              .map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </header>

        <section className="pt-8">
          <h2 className="eyebrow mb-4">Summary</h2>
          <p className="leading-relaxed text-muted">{site.summary}</p>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((job) => (
              <div key={`${job.company}-${job.title}`} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {job.title}
                    <span className="font-normal text-accent"> · {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-faint">
                    {job.start} — {job.end}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-muted">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Skills</h2>
          <dl className="space-y-4">
            {skillGroups.map((g) => (
              <div key={g.group} className="sm:flex sm:gap-6">
                <dt className="shrink-0 font-medium sm:w-44">{g.group}</dt>
                <dd className="text-muted">{g.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Products &amp; side projects</h2>
          <div className="space-y-5">
            {highlights.map((p) => (
              <div key={p.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline decoration-accent underline-offset-4"
                      >
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <span className="font-mono text-xs text-faint">{p.year}</span>
                </div>
                <p className="mt-1 leading-relaxed text-muted">{p.tagline}</p>
                <p className="mt-1 font-mono text-xs text-faint">
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Ventures</h2>
          <ul className="space-y-3">
            {ventures.map((v) => (
              <li key={v.id} className="break-inside-avoid">
                <span className="font-semibold">
                  {v.link ? (
                    <a
                      href={v.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="underline decoration-accent underline-offset-4"
                    >
                      {v.name}
                    </a>
                  ) : (
                    v.name
                  )}
                </span>
                <span className="text-accent">
                  {" "}
                  — {v.metric} {v.metricLabel}
                </span>
                <p className="mt-1 leading-relaxed text-muted">{v.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Awards &amp; recognition</h2>
          <ul className="space-y-3">
            {awards.map((a) => (
              <li key={a.name} className="break-inside-avoid">
                <span className="font-semibold">{a.name}</span>
                <span className="text-faint"> · {a.issuer}</span>
                <p className="mt-0.5 text-muted">{a.note}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-10">
          <h2 className="eyebrow mb-6">Education</h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="font-semibold">{e.credential}</h3>
                  <p className="text-muted">{e.school}</p>
                </div>
                <span className="font-mono text-xs text-faint">
                  {e.start} — {e.end}
                </span>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
};

export default Resume;
