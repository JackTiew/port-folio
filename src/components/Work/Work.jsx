import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section className="section-panel work-panel">
      <div className="section-inner flex min-h-0 flex-1 flex-col justify-center gap-8 py-4">
        <div>
          <p className="mb-2 font-mono text-sm text-[var(--accent)]">
            02 — Works
          </p>
          <h2 className="font-display text-4xl font-bold text-[var(--text)] sm:text-5xl">
            Some of my Works
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Side projects and experiments—games, tools, and UI builds shipped to
            production on Vercel.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
