// Single source of truth for personal details shown across the site.
// Copy is aimed at big tech and freelance clients: scale, systems and shipped
// products lead. Banking appears as evidence in the experience section, not as
// the identity — it shows the stakes without typecasting.
export const site = {
  name: "Akshay Bhardwaj",
  role: "Senior Frontend Engineer",
  byline: "Engineer · Builder · Operator",
  url: "https://akshay-dev.vercel.app", // TODO(akshay): set your real domain
  email: "akshaybhardwaj96.ab@gmail.com",
  phone: "+91 7814098274",
  location: "Gurugram, IN",
  // `emphasis` is the fragment set in italic accent within the headline.
  headline: "I ship software at scale — and products of my own.",
  emphasis: "and products of my own",
  summary:
    "Senior frontend engineer, eight years shipping React, Next.js and TypeScript systems used by millions. I own frontend architecture for platforms serving 2M+ customers, and I build AI products of my own.",
  pullQuote:
    "The work I'm proudest of is the unglamorous kind — the regulatory delivery that shipped on time and kept a bank out of penalty range.",
  resumePdf: "/akshay-bhardwaj-resume.pdf",
  avatar: "/profile.jpeg", // TODO(akshay): replace with your own photo
};

export const upwork = {
  profileUrl: "https://www.upwork.com/freelancers/~01a95eb0c7c6b15f6b",
  earned: "$26K+",
  // Engagements were AI/coding model training and evaluation, not client web
  // builds — see resume.js skillGroups for the specific task breakdown.
  focusDetail:
    "Writing and reviewing reference code, ranking model-generated solutions for correctness and quality, hunting for failure cases, and writing the rubrics used to grade coding-model output — across Python and JavaScript/TypeScript.",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/akshayBhardwaj23" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/akshaybhardwaj-23/" },
  { label: "Upwork", url: upwork.profileUrl },
  { label: "Email", url: `mailto:${site.email}` },
];

// Headline figures — the three that travel furthest with any audience.
export const stats = [
  { value: "8+", label: "Years shipping production software" },
  { value: "2M+", label: "Customers on platforms I've built" },
  { value: "4", label: "AI products shipped independently" },
];

// "The file" — the profile's signature device. Scannable hard facts.
export const factFile = [
  { term: "Role", value: "Senior Frontend Engineer" },
  { term: "Based", value: "Gurugram, IN" },
  { term: "Experience", value: "8+ years" },
  { term: "Core stack", value: "React · Next.js · TypeScript" },
  { term: "Also", value: "Node.js · PostgreSQL · GraphQL" },
  { term: "Billed on Upwork", value: upwork.earned },
];
