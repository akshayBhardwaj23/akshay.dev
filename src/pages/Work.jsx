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
      <PageHeader eyebrow="Portfolio" title="Work">
        Everything I’ve built and shipped — AI products of my own, and the
        projects I used to learn things properly.
      </PageHeader>

      <div className="wrap">
        <div className="flex flex-wrap items-center gap-2 border-b border-line pb-6">
          {availableKinds.map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                kind === k.id
                  ? "border-ink bg-ink text-surface"
                  : "border-line text-muted hover:border-ink/40 hover:text-ink"
              }`}
            >
              {k.label}
            </button>
          ))}

          <label className="ml-auto flex items-center gap-2 text-sm text-muted">
            <span className="hidden sm:inline">Stack</span>
            <select
              value={stack}
              onChange={(e) => setStack(e.target.value)}
              className="rounded-full border border-line bg-raised px-3 py-1.5 text-sm text-ink outline-none focus:border-ink/40"
            >
              {stacks.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "Any technology" : s}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-6 font-mono text-xs text-faint">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        {visible.length > 0 ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
