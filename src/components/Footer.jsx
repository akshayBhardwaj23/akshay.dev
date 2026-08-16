import { Link } from "react-router-dom";
import { site, socials } from "../data/site";

const Footer = () => (
  <footer className="mt-28">
    <div className="wrap">
      <hr className="rule-major" />
      <div className="grid gap-10 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="display text-3xl">
            Let&rsquo;s build <em className="italic text-accent">something</em>.
          </p>
          <p className="mt-3 text-muted">
            Available for freelance and contract work.
          </p>
          <a href={`mailto:${site.email}`} className="link-rule mt-4 inline-block font-sans text-sm">
            {site.email}
          </a>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="folio">Sections</p>
          {[
            { to: "/work", label: "Work" },
            { to: "/about", label: "About" },
            { to: "/hire", label: "Hire me" },
            { to: "/resume", label: "Résumé" },
          ].map((r) => (
            <Link key={r.to} to={r.to} className="text-muted transition-colors hover:text-accent">
              {r.label}
            </Link>
          ))}
        </nav>

        <nav className="flex flex-col gap-3">
          <p className="folio">Elsewhere</p>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      <hr className="rule-hair" />
      <div className="flex flex-col gap-2 py-6 sm:flex-row sm:justify-between">
        <p className="folio">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="folio">Set in Newsreader &amp; Archivo</p>
      </div>
    </div>
  </footer>
);

export default Footer;
