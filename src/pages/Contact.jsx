import PageHeader from "../components/PageHeader";
import { site, socials, upwork } from "../data/site";
import { useMeta } from "../hooks/useMeta";

const Contact = () => {
  useMeta({
    title: "Contact",
    description: `Get in touch with ${site.name} about freelance, contract or full-time work.`,
    path: "/contact",
  });

  return (
    <>
      <PageHeader eyebrow="Contact" title="Say hello.">
        Freelance projects, contract work, or a full-time role — if it’s
        interesting, I want to hear about it. I reply to everything within a day
        or so.
      </PageHeader>

      <section className="wrap grid gap-8 md:grid-cols-2">
        <a
          href={`mailto:${site.email}`}
          className="card group flex flex-col justify-between p-8 hover:border-ink/30"
        >
          <div>
            <p className="eyebrow mb-3">Email</p>
            <p className="font-display text-2xl transition-colors group-hover:text-accent md:text-3xl">
              {site.email}
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">
            Best for project enquiries and job opportunities.
          </p>
        </a>

        <a
          href={upwork.profileUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="card group flex flex-col justify-between p-8 hover:border-ink/30"
        >
          <div>
            <p className="eyebrow mb-3">Upwork</p>
            <p className="font-display text-2xl transition-colors group-hover:text-accent md:text-3xl">
              Work with me on Upwork
            </p>
          </div>
          <p className="mt-6 text-sm text-muted">
            {upwork.earned} lifetime billed, with contracts and escrow handled
            for you.
          </p>
        </a>
      </section>

      <section className="wrap pt-16">
        <p className="eyebrow mb-5">Find me elsewhere</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline text-muted transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
