import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import { projectKinds, projects } from "../data/projects";
import { useMeta } from "../hooks/useMeta";

const Work = () => {
  useMeta({
    title: "Work",
    description:
      "Products, client engagements and personal builds by Akshay Bhardwaj — React, Next.js, Node.js and TypeScript.",
    path: "/work",
  });

  const [kind, setKind] = useState("all");
  const [stack, setStack] = useState("all");

  const stacks = useMemo(
    () => ["all", ...new Set(projects.flatMap((p) => p.stack))].sort(),
    []
  );

  const visible = projects.filter(
    (p) =>
      (kind === "all" || p.kind === kind) &&
      (stack === "all" || p.stack.includes(stack))
  );

  const availableKinds = projectKinds.filter(
    (k) => k.id === "all" || projects.some((p) => p.kind === k.id)
  );

  return (
    <>
      <PageHeader eyebrow="Portfolio" folio={`${projects.length} projects`} title="Work">
        Everything I’ve built and shipped — AI products of my own, and the
        projects I used to learn things properly.
      </PageHeader>

      <div className="wrap">
        <div className="flex flex-wrap items-center gap-2 pb-6">
          {availableKinds.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              className={`border px-4 py-1.5 font-sans text-[0.8125rem] uppercase tracking-[0.1em] transition-colors ${
                kind === k.id
                  ? "border-ink bg-ink text-surface"
                  : "border-line text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {k.label}
            </button>
          ))}

          <label className="ml-auto flex items-center gap-2 font-sans text-sm text-muted">
            <span className="hidden sm:inline">Stack</span>
            <select
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="border border-line bg-raised px-3 py-1.5 font-sans text-sm text-ink outline-none focus:border-accent"
            >
              {stacks.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "Any technology" : s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <hr className="rule-hair" />
        <p className="folio mt-5">
          Showing {visible.length} of {projects.length}
        </p>

        {visible.length > 0 ? (
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-muted">
            No projects match those filters.
          </p>
        )}
      </div>
    </>
  );
};

export default Work;
