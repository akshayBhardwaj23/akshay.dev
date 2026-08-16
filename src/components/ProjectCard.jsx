const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5">
    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { name, img, fit, tagline, stack, link, git, year } = project;

  // Square logos are letterboxed rather than crop-filled, which would cut them off.
  const isLogo = fit === "contain";

  return (
    <article className="card group overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        {img ? (
          <img
            src={img}
            alt={isLogo ? `${name} logo` : `${name} screenshot`}
            loading="lazy"
            className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              isLogo ? "object-contain p-10" : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="grid h-full place-items-center font-mono text-xs text-faint">
            No preview
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl">{name}</h3>
          <span className="font-mono text-xs text-faint">{year}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>

        {(link || git) && (
          <div className="mt-5 flex gap-4 text-sm">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
              >
                Live site <ArrowIcon />
              </a>
            )}
            {git && (
              <a
                href={git}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
              >
                Source <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
