import { Link } from "react-router-dom";
import DownloadResume from "../components/DownloadResume";
import FactFile from "../components/FactFile";
import ProjectCard from "../components/ProjectCard";
import Ventures from "../components/Ventures";
import { projects } from "../data/projects";
import { site, socials, stats } from "../data/site";
import { awards, experience, skillGroups } from "../data/resume";
import { useMeta } from "../hooks/useMeta";

const Home = () => {
  useMeta({ title: null, description: site.summary, path: "/" });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const current = experience[0];

  return (
    <>
      {/* ---------- The spread ---------- */}
      <section className="wrap animate-fade-up pt-12 md:pt-16">
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4">
          <p className="kicker">Profile</p>
          <p className="folio">{site.byline}</p>
        </div>
        <hr className="rule-section" />

        <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h1 className="display text-[2.75rem] sm:text-6xl lg:text-7xl">
              I build at the scale where{" "}
              <em className="italic text-accent">mistakes are expensive</em>.
            </h1>

            <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
              {site.summary}
            </p>

            <blockquote className="quote mt-10">{site.pullQuote}</blockquote>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/work" className="btn-primary">
                See the work
              </Link>
              <DownloadResume />
              <Link to="/hire" className="btn-ghost">
                Hire me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-faint">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-rule"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FactFile />
        </div>
      </section>

      {/* ---------- Figures ---------- */}
      <section className="wrap pt-20">
        <hr className="rule-major" />
        <div className="grid sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0 ${
                i === 0
                  ? "border-b border-line sm:border-b-0"
                  : "border-b border-line sm:border-b-0 sm:border-l"
              }`}
            >
              <p className="display text-5xl tabular-nums text-accent md:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 font-sans text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <hr className="rule-major" />
      </section>

      {/* ---------- Currently ---------- */}
      <section className="wrap pt-20">
        <p className="kicker mb-4">Currently</p>
        <h2 className="display max-w-3xl text-3xl md:text-4xl">
          {current.title}, <em className="italic">{current.company}</em>
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {current.bullets.slice(0, 4).map((b) => (
            <p key={b} className="text-muted leading-relaxed">
              {b}
            </p>
          ))}
        </div>
        <Link to="/about" className="link-rule mt-8 inline-block font-sans text-sm text-muted">
          Full background
        </Link>
      </section>

      {/* ---------- Selected work ---------- */}
      <section className="wrap pt-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3 pb-4">
          <p className="kicker">Selected work</p>
          <p className="folio">Products · {featured.length}</p>
        </div>
        <hr className="rule-section" />

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* ---------- Also built ---------- */}
      <section className="wrap pt-20">
        <p className="kicker mb-5">Also built</p>
        <hr className="rule-hair" />
        <ul>
          {others.map((p) => (
            <li key={p.id} className="border-b border-line">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-56 shrink-0 text-xl transition-colors group-hover:text-accent">
                  {p.name}
                </span>
                <span className="flex-1 text-muted">{p.tagline}</span>
                <span className="folio shrink-0">{p.stack.slice(0, 3).join(" · ")}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Ventures intro="Alongside engineering, I've built and sold things of my own — an ecommerce brand, an info product, and independent contract work." />

      {/* ---------- Recognition ---------- */}
      <section className="wrap pt-24">
        <p className="kicker mb-5">Recognition</p>
        <hr className="rule-section" />
        <ul>
          {awards.map((a) => (
            <li
              key={a.name}
              className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="w-72 shrink-0">{a.name}</span>
              <span className="flex-1 text-muted">{a.note}</span>
              <span className="folio shrink-0">{a.issuer}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Toolkit ---------- */}
      <section className="wrap pt-24">
        <p className="kicker mb-5">Toolkit</p>
        <hr className="rule-section" />
        <dl className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.group}>
              <dt className="folio mb-2">{g.group}</dt>
              <dd className="text-muted leading-relaxed">{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
};

export default Home;
