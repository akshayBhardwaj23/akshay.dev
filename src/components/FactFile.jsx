import { factFile } from "../data/site";

/** The boxed set of hard facts that anchors the profile spread. */
const FactFile = ({ title = "The file", items = factFile }) => (
  <aside className="file box self-start p-6">
    <p className="kicker mb-5">{title}</p>
    <dl className="font-sans text-sm">
      {items.map((f, i) => (
        <div
          key={f.term}
          className={`flex justify-between gap-4 py-2.5 ${
            i === 0 ? "" : "border-t border-line"
          }`}
        >
          <dt>{f.term}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  </aside>
);

export default FactFile;
