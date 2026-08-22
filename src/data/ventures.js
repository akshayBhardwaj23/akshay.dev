import { upwork } from "./site";

// Things I’ve built as a business rather than as software — kept separate from
// the engineering portfolio so neither story dilutes the other.
export const ventures = [
  {
    id: "slick-stiles",
    name: "Slick Stiles",
    kind: "D2C ecommerce",
    metric: "$100K",
    metricLabel: "revenue in 2 years",
    desc: "Bootstrapped and scaled a direct-to-consumer ecommerce store to $100K in revenue over two years, running end-to-end operations, fulfilment and growth.",
    link: "https://slickstiles.com",
  },
  {
    id: "akshaygmat",
    name: "akshaygmat.com",
    kind: "Info product",
    metric: "695",
    metricLabel: "GMAT Focus (97th percentile)",
    desc: "Scored 695 on the GMAT Focus — 88 Quant, 84 Verbal, 82 Data Insights — going from 645 to 695 in 16 days while working full-time, without coaching. Productised the method into a study system and roadmap, built the storefront, and sell it direct.",
    link: "https://www.akshaygmat.com/",
  },
  {
    id: "upwork",
    name: "Upwork",
    kind: "Freelance",
    metric: upwork.earned,
    metricLabel: "lifetime billed",
    desc: upwork.focusDetail,
    link: upwork.profileUrl,
  },
];
