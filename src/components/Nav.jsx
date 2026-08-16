import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../data/site";

const routes = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/hire", label: "Hire me" },
  { to: "/resume", label: "Résumé" },
  { to: "/contact", label: "Contact" },
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" strokeLinejoin="round" />
  </svg>
);

const Nav = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Block body so the effect never returns a value React would call as cleanup.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm">
      <div className="wrap flex h-14 items-center justify-between">
        {/* Masthead */}
        <Link to="/" className="text-xl tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>dev
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {routes.map((r) => (
            <NavLink
              key={r.to}
              to={r.to}
              className={({ isActive }) =>
                `font-sans text-[0.8125rem] uppercase tracking-[0.1em] transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                }`
              }
            >
              {r.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="grid h-9 w-9 place-items-center border border-transparent text-muted transition-colors hover:border-line hover:text-ink"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border border-transparent text-muted transition-colors hover:border-line hover:text-ink md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <hr className="rule-section" />

      {open && (
        <nav className="bg-surface md:hidden">
          <div className="wrap flex flex-col">
            {routes.map((r) => (
              <NavLink
                key={r.to}
                to={r.to}
                className={({ isActive }) =>
                  `border-b border-line py-4 text-lg ${
                    isActive ? "text-accent" : "text-muted"
                  }`
                }
              >
                {r.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Nav;
