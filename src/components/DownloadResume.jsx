import { site } from "../data/site";

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path
      d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * `download` sets the saved filename; the file itself lives at
 * public/akshay-bhardwaj-resume.pdf and is served straight from the origin.
 */
const DownloadResume = ({ variant = "ghost", label = "Download résumé" }) => (
  <a
    href={site.resumePdf}
    download="Akshay-Bhardwaj-Resume.pdf"
    className={variant === "primary" ? "btn-primary" : "btn-ghost"}
  >
    <DownloadIcon />
    {label}
  </a>
);

export default DownloadResume;
