import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it } from "vitest";
import App from "../App";
import { projects } from "../data/projects";
import { site, upwork } from "../data/site";
import { ventures } from "../data/ventures";

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe("routing", () => {
  it("renders the home page headline and summary", () => {
    renderAt("/");
    // The headline is broken up by an <em>, so match the heading's full text.
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toHaveTextContent(site.headline);
    expect(screen.getByText(site.summary)).toBeInTheDocument();
  });

  it("renders the work page with every project", () => {
    renderAt("/work");
    expect(
      screen.getByRole("heading", { level: 1, name: "Work" })
    ).toBeInTheDocument();
    expect(screen.getByText("MagicStocks.ai")).toBeInTheDocument();
    expect(screen.getByText("Snaptix.ai")).toBeInTheDocument();
    expect(screen.getByText("Zyyp.ai")).toBeInTheDocument();
    expect(screen.getByText(`${projects.length} projects`)).toBeInTheDocument();
  });

  it("renders the hire page with the Upwork earnings figure", () => {
    renderAt("/hire");
    expect(screen.getAllByText(new RegExp(upwork.earned.replace("$", "\\$").replace("+", "\\+"))).length).toBeGreaterThan(0);
  });

  it("shows the current employer on the home page", () => {
    renderAt("/");
    expect(
      screen.getAllByText(/National Australia Bank/).length
    ).toBeGreaterThan(0);
  });

  it("lists every venture on the resume", () => {
    renderAt("/resume");
    ventures.forEach((v) => {
      expect(screen.getAllByText(v.name).length).toBeGreaterThan(0);
    });
  });

  it("renders the resume with a download link", () => {
    renderAt("/resume");
    expect(
      screen.getByRole("link", { name: /download pdf/i })
    ).toHaveAttribute("href", site.resumePdf);
  });


  it("surfaces every project somewhere on the home page", () => {
    renderAt("/");
    projects.forEach((p) => {
      expect(screen.getAllByText(p.name).length).toBeGreaterThan(0);
    });
  });

  it("falls back to the 404 page for unknown routes", () => {
    renderAt("/no-such-page");
    expect(screen.getByText("Nothing here.")).toBeInTheDocument();
  });
});

// Regression: ScrollToTop used a concise arrow, so window.scrollTo's return
// value became the effect cleanup. Under any environment where scrollTo
// returns non-undefined (extensions, smooth-scroll polyfills), React called
// it on the next navigation and blanked the page with "n is not a function".
describe("effects never return a non-function cleanup", () => {
  const realScrollTo = window.scrollTo;
  afterEach(() => {
    window.scrollTo = realScrollTo;
  });

  it("survives navigation when window.scrollTo returns a value", async () => {
    window.scrollTo = () => true;
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Two navigations: the first stores the cleanup, the second invokes it.
    // Nav renders desktop, mobile and footer links, so take the first match.
    await user.click(screen.getAllByRole("link", { name: "Work" })[0]);
    await user.click(screen.getAllByRole("link", { name: "About" })[0]);

    expect(
      screen.getByRole("heading", { level: 1, name: /Akshay/ })
    ).toBeInTheDocument();
  });
});
