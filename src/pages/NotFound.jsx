import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";

const NotFound = () => {
  useMeta({
    title: "Not found",
    description: "That page doesn’t exist.",
    path: "/404",
  });

  return (
    <section className="wrap grid min-h-[60vh] place-items-center py-24 text-center">
      <div>
        <p className="kicker mb-4">404</p>
        <h1 className="display text-5xl md:text-6xl">Nothing here.</h1>
        <p className="mx-auto mt-5 max-w-prose text-muted">
          That page doesn’t exist — it may have moved or never existed at all.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
