import { Link } from "react-router-dom";
import DownloadResume from "../components/DownloadResume";
import PageHeader from "../components/PageHeader";
import Ventures from "../components/Ventures";
import { domains, education, experience, skillGroups } from "../data/resume";
import { site } from "../data/site";
import { useMeta } from "../hooks/useMeta";

const About = () => {
  useMeta({
    title: "About",
    description: `About ${site.name} — ${site.role} at National Australia Bank. 8+ years building React and Next.js applications for banking, insurance and AI products.`,
    path: "/about",
  });

  return (
    <>
      <PageHeader eyebrow="About" title="Hey, I’m Akshay.">
        {site.summary}
      </PageHeader>

      <section className="wrap grid gap-14 md:grid-cols-[1fr_320px]">
        <div className="max-w-prose space-y-5 leading-relaxed text-muted">
          <p>
            I’ve spent eight years in the parts of software where mistakes are
            expensive — insurance policy issuance, digital banking, and now
            trading platforms at National Australia Bank. That work shaped how I
            build: modular architecture that survives handover, accessibility
            treated as a requirement rather than a cleanup task, and code review
            standards that catch problems before customers do.
          </p>
          <p>
            At NAB I lead frontend architecture for trading and internet banking
            platforms serving over two million customers, working across teams in
            India, Australia and Vietnam. The work I’m proudest of there is the
            unglamorous kind — a regulatory workflow integration delivered on
            time that kept the bank out of penalty range, and an internal
            accessibility tool that made the right thing the easy thing for
            everyone else.
          </p>
          <p>
            Outside of that I build and ship products of my own.{" "}
            <a
              href="https://snaptix.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink underline decoration-accent underline-offset-4"
            >
              Snaptix
            </a>{" "}
            turns spreadsheets into dashboards and forecasts,{" "}
            <a
              href="https://zyyp.ai"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink underline decoration-accent underline-offset-4"
            >
              Zyyp
            </a>{" "}
            automates support for DTC brands, and{" "}
            <a
              href="https://startup-analyst-xi.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink underline decoration-accent underline-offset-4"
            >
              Startup Analyst
            </a>{" "}
            placed Top 10 nationally in the Google GenAI Exchange Hackathon.
            Running them end to end — pricing, billing, support, the lot — has
            made me a considerably better engineer than building features alone
            ever did.
          </p>
          <p>
            I’ve also been recognised as NAB’s AI Champion, leading GenAI
            adoption across squads. If you want the short version, the{" "}
            <Link
              to="/resume"
              className="text-ink underline decoration-accent underline-offset-4"
            >
              résumé
            </Link>{" "}
            has it.
          </p>
        </div>

        <aside className="space-y-8">
          <div className="card overflow-hidden">
            {/* Portrait ratio + top anchoring so a full-body shot keeps the face. */}
            <img
              src={site.avatar}
              alt={site.name}
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between border-b border-line pb-3">
              <span className="text-faint">Based in</span>
              <span>{site.location}</span>
            </div>
            <div className="flex justify-between border-b border-line pb-3">
              <span className="text-faint">Experience</span>
              <span>8+ years</span>
            </div>
            <div className="flex justify-between border-b border-line pb-3">
              <span className="text-faint">Currently</span>
              <span className="text-right">National Australia Bank</span>
            </div>
            <div className="flex justify-between">
              <span className="text-faint">Focus</span>
              <span className="text-right">React · Next.js · TypeScript</span>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Domains</p>
            <div className="flex flex-wrap gap-1.5">
              {domains.map((d) => (
                <span key={d} className="tag">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Experience */}
      <section className="wrap pt-24">
        <p className="eyebrow mb-3">Career</p>
        <h2 className="display text-4xl md:text-5xl">Experience</h2>

        <ol className="mt-12 border-l border-line">
          {experience.map((job) => (
            <li key={`${job.company}-${job.title}`} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs text-faint">
                {job.start} — {job.end} · {job.location}
              </p>
              <h3 className="mt-2 font-display text-2xl">{job.title}</h3>
              <p className="text-accent">{job.company}</p>
              <ul className="mt-4 max-w-prose space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-muted">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="wrap pt-16">
        <p className="eyebrow mb-3">Education</p>
        {education.map((e) => (
          <div
            key={e.school}
            className="mt-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-6"
          >
            <div>
              <h3 className="font-display text-2xl">{e.credential}</h3>
              <p className="text-muted">{e.school}</p>
            </div>
            <span className="font-mono text-xs text-faint">
              {e.start} — {e.end}
            </span>
          </div>
        ))}
      </section>

      <Ventures />

      {/* Skills */}
      <section className="wrap pt-24">
        <p className="eyebrow mb-3">Toolkit</p>
        <h2 className="display text-4xl md:text-5xl">Skills</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.group} className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {g.group}
              </h3>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link to="/resume" className="btn-primary">
            Full résumé
          </Link>
          <DownloadResume />
          <Link to="/contact" className="btn-ghost">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
