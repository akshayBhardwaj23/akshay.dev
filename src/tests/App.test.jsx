import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
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
  it("renders the home page headline", () => {
    renderAt("/");
    expect(screen.getByText(site.headline)).toBeInTheDocument();
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
