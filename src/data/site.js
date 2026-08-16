// Single source of truth for personal details shown across the site.
export const site = {
  name: "Akshay Bhardwaj",
  role: "Senior Frontend Engineer",
  url: "https://akshay-dev.vercel.app", // TODO(akshay): set your real domain — feeds canonical + OG tags
  email: "akshaybhardwaj96.ab@gmail.com",
  phone: "+91 7814098274",
  location: "Gurugram, IN",
  headline: "I build the software banks and businesses run on.",
  summary:
    "Senior Frontend Engineer with 8+ years building scalable, performant web applications in React, Next.js, TypeScript and GraphQL. Currently at National Australia Bank, where I lead frontend architecture for trading and internet banking platforms serving 2M+ customers. Outside of that I ship AI products of my own.",
  resumePdf: "/akshay-bhardwaj-resume.pdf",
  avatar: "/profile.jpeg", // TODO(akshay): a proper headshot would serve you better
};

export const upwork = {
  profileUrl: "https://www.upwork.com/freelancers/~01a95eb0c7c6b15f6b",
  earned: "$26K+",
  // Engagements were AI/coding model training, not client web builds — described
  // that way everywhere so the number never implies something it isn’t.
  focus: "AI & coding model training",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/akshayBhardwaj23" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/akshaybhardwaj-23/" },
  { label: "Upwork", url: upwork.profileUrl },
  { label: "Email", url: `mailto:${site.email}` },
];

// Credibility strip on the home page.
export const stats = [
  { value: "8+", label: "Years shipping production software" },
  { value: "2M+", label: "Customers on platforms I’ve built" },
  { value: upwork.earned, label: "Billed independently on Upwork" },
];
