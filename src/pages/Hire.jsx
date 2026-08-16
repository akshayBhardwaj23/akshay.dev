import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { testimonials } from "../data/resume";
import { site, upwork } from "../data/site";
import { useMeta } from "../hooks/useMeta";

const services = [
  {
    title: "Product builds, end to end",
    body: "Full applications on React or Next.js with a Node, FastAPI or Postgres backend — auth, payments, dashboards, the lot. Snaptix and Zyyp are both mine, start to finish.",
  },
  {
    title: "Frontend architecture",
    body: "Micro-frontends, design systems, state and data-fetching strategy. The same work I do on a trading platform serving millions, scaled down to fit your team.",
  },
  {
    title: "AI-powered features",
    body: "OpenAI and Gemini integrations for analysis, chat, search and forecasting — shipped in production across four products, with billing and rate limits handled.",
  },
  {
    title: "Rescue & refactor",
    body: "Inheriting a codebase that’s fighting you? I untangle, document and stabilise, then set up the review and accessibility standards that keep it that way.",
  },
];

const credentials = [
  "8+ years shipping production engineering at scale — insurance, banking and trading systems",
  "Currently leading frontend architecture for platforms serving 2M+ customers",
  "Four AI products shipped independently, with real users and paid tiers",
  "Top 10 nationally, Google GenAI Exchange Hackathon",
];

const Hire = () => {
  useMeta({
    title: "Hire me",
    description: `${site.name} — Senior frontend engineer available for freelance and contract work. Eight years at scale, four AI products shipped, ${upwork.earned} billed independently on Upwork.`,
    path: "/hire",
  });

  const products = projects.filter((p) => p.kind === "product");

  return (
    <>
      <PageHeader eyebrow="Freelance & contract" folio="Available now" title="Hire me">
        I’m a senior engineer who has spent eight years shipping software where
        downtime costs money — and who builds and sells products of his own on
        the side. If you need something built properly the first time, that
        combination is the whole pitch.
      </PageHeader>

      {/* Credentials */}
      <section className="wrap">
        <div className="box p-8 md:p-12">
          <p className="kicker mb-6">Track record</p>
          <ul className="space-y-4">
            {credentials.map((c) => (
              <li key={c} className="flex gap-4 text-lg">
                <span className="mt-3 h-px w-4 shrink-0 bg-accent" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border-t border-line pt-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="display text-4xl text-accent">{upwork.earned}</p>
              <p className="text-muted">lifetime billed on Upwork</p>
            </div>
            <p className="mt-2 max-w-prose font-sans text-sm text-faint">
              Independent engagements focused on {upwork.focus} — evaluating and
              improving how AI models reason about code.
            </p>
            <a
              href={upwork.profileUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost mt-6"
            >
              View Upwork profile
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="wrap pt-24">
        <p className="kicker mb-3">Services</p>
        <h2 className="display text-4xl md:text-5xl">What I can build for you</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="box p-7">
              <h3 className="display text-2xl">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="wrap pt-24">
          <p className="kicker mb-3">Reviews</p>
          <h2 className="display text-4xl md:text-5xl">What clients say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure key={i} className="box p-7">
                {t.rating && (
                  <p className="text-accent" aria-label={`${t.rating} out of 5`}>
                    {"★".repeat(t.rating)}
                  </p>
                )}
                <blockquote className="mt-4 leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 font-sans text-sm text-faint">
                  {t.author}
                  {t.role && ` · ${t.role}`}
                  {t.source && ` · ${t.source}`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Proof: my own products */}
      <section className="wrap pt-24">
        <p className="kicker mb-3">Proof</p>
        <h2 className="display text-4xl md:text-5xl">Products I’ve shipped</h2>
        <p className="mt-5 max-w-prose leading-relaxed text-muted">
          Not case studies from a portfolio — live products I designed, built,
          priced and support myself.
        </p>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {products.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pt-24">
        <div className="box p-10 text-center md:p-16">
          <h2 className="display text-4xl md:text-5xl">Got a project in mind?</h2>
          <p className="mx-auto mt-5 max-w-prose leading-relaxed text-muted">
            Tell me what you’re building and roughly where it needs to land. I’ll
            come back with a plan, a timeline and a number — usually within a day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${site.email}`} className="btn-primary">
              Email me
            </a>
            <Link to="/work" className="btn-ghost">
              See the full portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hire;
