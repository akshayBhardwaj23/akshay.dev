# akshay.dev

Personal site and portfolio — React + Vite + Tailwind.

## Running it

```bash
npm install
npm run dev
```

`npm run build` produces `dist/`. `npm run lint` and `npm test` should both stay clean.

## Structure

| Route      | Page                | Purpose                                          |
| ---------- | ------------------- | ------------------------------------------------ |
| `/`        | `pages/Home.jsx`    | Hero, credibility stats, featured work, toolkit  |
| `/work`    | `pages/Work.jsx`    | Every project, filterable by kind and stack      |
| `/about`   | `pages/About.jsx`   | Bio, experience timeline, skills                 |
| `/hire`    | `pages/Hire.jsx`    | Track record, services, testimonials, shipped products |
| `/resume`  | `pages/Resume.jsx`  | Rendered résumé, printable and PDF-downloadable  |
| `/contact` | `pages/Contact.jsx` | Email and Upwork                                 |

## Editing content

All copy and data live in `src/data/` — no need to touch components:

- **`site.js`** — name, headline, summary, socials, Upwork figures, home-page stat strip
- **`projects.js`** — every project. `kind` is `product` / `practice`; `featured: true` surfaces it on the home page; `fit: "contain"` letterboxes a square logo instead of crop-filling it
- **`resume.js`** — experience, education, awards, skill groups, domains, testimonials
- **`ventures.js`** — Slick Stiles, akshaygmat.com and Upwork, shown separately from the engineering portfolio

Anything still marked `TODO(akshay)` needs real content.

## Assets

Drop these in `public/`:

- `akshay-bhardwaj-resume.pdf` — the résumé download
- `og.png` — 1200×630 social preview image
- `profile.jpeg` — headshot used on the About page

## Deployment

`vercel.json` rewrites all paths to `index.html` so client-side routes work on
refresh and direct links. Any other host needs the equivalent SPA fallback.
