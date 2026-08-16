import { useEffect } from "react";
import { site } from "../data/site";

const setTag = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

/** Per-route <title>, description, canonical and Open Graph tags. */
export const useMeta = ({ title, description, path = "" }) => {
  useEffect(() => {
    const full = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;
    const url = `${site.url}${path}`;

    document.title = full;
    setTag("name", "description", description);
    setTag("property", "og:title", full);
    setTag("property", "og:description", description);
    setTag("property", "og:url", url);
    setTag("name", "twitter:title", full);
    setTag("name", "twitter:description", description);
    setCanonical(url);
  }, [title, description, path]);
};
