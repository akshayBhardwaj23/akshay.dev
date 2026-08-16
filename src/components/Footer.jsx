import { Link } from "react-router-dom";
import { site, socials } from "../data/site";

const Footer = () => (
  <footer className="mt-32 border-t border-line">
    <div className="wrap grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
      <div className="max-w-sm">
        <p className="font-display text-2xl">Let’s build something.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Available for freelance and contract work.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="link-underline mt-4 inline-block text-sm text-ink"
        >
          {site.email}
        </a>
      </div>

      <nav className="flex flex-col gap-3 text-sm">
        <p className="eyebrow mb-1">Site</p>
        {[
          { to: "/work", label: "Work" },
          { to: "/about", label: "About" },
          { to: "/hire", label: "Hire me" },
          { to: "/resume", label: "Résumé" },
        ].map((r) => (
          <Link key={r.to} to={r.to} className="text-muted transition-colors hover:text-ink">
            {r.label}
          </Link>
        ))}
      </nav>

      <nav className="flex flex-col gap-3 text-sm">
        <p className="eyebrow mb-1">Elsewhere</p>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted transition-colors hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </div>

    <div className="wrap flex flex-col gap-2 border-t border-line py-6 text-xs text-faint sm:flex-row sm:justify-between">
      <p>
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
      <p className="font-mono">Built with React, Vite &amp; Tailwind.</p>
    </div>
  </footer>
);

export default Footer;
