import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// jsdom has no matchMedia, which useTheme relies on for the initial theme.
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: () => {},
  removeEventListener: () => {},
  addListener: () => {},
  removeListener: () => {},
  dispatchEvent: () => false,
});

// jsdom does not implement scrollTo, which ScrollToTop calls on every route change.
window.scrollTo = () => {};

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
