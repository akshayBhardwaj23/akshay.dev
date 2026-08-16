const ProjectCard = ({ project }) => {
  const { name, img, fit, tagline, stack, link, git, year } = project;

  // Square logos are letterboxed rather than crop-filled, which would cut them off.
  const isLogo = fit === "contain";

  return (
    <article className="group">
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-raised">
        {img ? (
          <img
            src={img}
            alt={isLogo ? `${name} logo` : `${name} screenshot`}
            loading="lazy"
            className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
              isLogo ? "object-contain p-12" : "object-cover object-top"
            }`}
          />
        ) : (
          <div className="folio grid h-full place-items-center">No preview</div>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-4 pt-5">
        <h3 className="display text-3xl">{name}</h3>
        <span className="folio shrink-0 tabular-nums">{year}</span>
      </div>

      <p className="mt-2 max-w-prose leading-relaxed text-muted">{tagline}</p>

      <p className="folio mt-4">{stack.join(" · ")}</p>

      {(link || git) && (
        <div className="mt-4 flex gap-5 font-sans text-sm">
          {link && (
            <a href={link} target="_blank" rel="noreferrer noopener" className="link-rule text-ink">
              Live site
            </a>
          )}
          {git && (
            <a href={git} target="_blank" rel="noreferrer noopener" className="link-rule text-muted">
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
