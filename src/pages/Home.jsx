import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Ventures from "../components/Ventures";
import { projects } from "../data/projects";
import { site, socials, stats } from "../data/site";
import { awards, experience, skillGroups } from "../data/resume";
import { useMeta } from "../hooks/useMeta";

const Home = () => {
  useMeta({
    title: null,
    description: site.summary,
    path: "/",
  });

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const current = experience[0];

  return (
    <>
      {/* Hero */}
      <section className="wrap animate-fade-up pb-20 pt-20 md:pb-28 md:pt-32">
        <p className="eyebrow mb-6">
          {site.role} · {site.location}
        </p>
        <h1 className="display max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {site.headline}
        </h1>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
          {site.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/work" className="btn-primary">
            See the work
          </Link>
          <Link to="/resume" className="btn-ghost">
            Résumé
          </Link>
          <Link to="/hire" className="btn-ghost">
            Hire me
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-faint">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-line bg-raised">
        <div className="wrap grid divide-y divide-line py-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-8 text-center">
              <p className="display text-4xl text-accent md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current role */}
      <section className="wrap pt-24">
        <p className="eyebrow mb-3">Currently</p>
        <h2 className="display max-w-3xl text-4xl md:text-5xl">
          {current.title} at{" "}
          <span className="text-accent">{current.company}</span>
        </h2>
        <ul className="mt-8 max-w-prose space-y-3">
          {current.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-3 text-muted">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/about"
          className="link-underline mt-8 inline-block text-sm text-muted hover:text-ink"
        >
          Full background →
        </Link>
      </section>

      {/* Featured work */}
      <section className="wrap pt-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="display text-4xl md:text-5xl">Products I’ve built</h2>
          </div>
          <Link
            to="/work"
            className="link-underline hidden shrink-0 text-sm text-muted hover:text-ink sm:block"
          >
            View all {projects.length} projects →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <Link
          to="/work"
          className="link-underline mt-10 inline-block text-sm text-muted hover:text-ink sm:hidden"
        >
          View all {projects.length} projects →
        </Link>
      </section>

      {/* Everything else — so no project is only reachable from /work */}
      <section className="wrap pt-20">
        <p className="eyebrow mb-6">Also built</p>
        <ul className="divide-y divide-line border-y border-line">
          {others.map((p) => (
            <li key={p.id}>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-56 shrink-0 font-display text-xl transition-colors group-hover:text-accent">
                  {p.name}
                </span>
                <span className="flex-1 text-sm text-muted">{p.tagline}</span>
                <span className="font-mono text-xs text-faint">
                  {p.stack.slice(0, 3).join(" · ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Ventures */}
      <Ventures intro="Alongside engineering, I’ve built and sold things of my own — an ecommerce brand, an info product, and independent contract work." />

      {/* Recognition */}
      <section className="wrap pt-28">
        <p className="eyebrow mb-3">Recognition</p>
        <h2 className="display text-4xl md:text-5xl">Awards</h2>
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {awards.map((a) => (
            <li
              key={a.name}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="w-64 shrink-0 font-medium">{a.name}</span>
              <span className="flex-1 text-sm text-muted">{a.note}</span>
              <span className="font-mono text-xs text-faint">{a.issuer}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="wrap pt-28">
        <p className="eyebrow mb-3">Toolkit</p>
        <h2 className="display text-4xl md:text-5xl">What I work with</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.group}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {g.group}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((i) => (
                  <li key={i} className="text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
