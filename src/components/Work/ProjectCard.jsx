const ProjectCard = ({ project }) => {
  const techQuery = project.tech.join(",");

  return (
    <article className="project-card group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 backdrop-blur-sm transition hover:border-[var(--accent)]/50 hover:shadow-[0_8px_40px_-12px_var(--accent-glow)]">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
          {project.title}
        </h3>
        <span className="shrink-0 rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted)]">
          {project.status}
        </span>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <img
            key={tech}
            className="h-7 w-7 opacity-90"
            src={`https://skillicons.dev/icons?i=${tech}`}
            alt={tech}
            title={tech}
            loading="lazy"
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-[var(--bg)] transition hover:brightness-110"
          >
            {project.linkLabel ?? "Live demo"}
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]"
          >
            Repository
          </a>
        )}
        {!project.liveUrl && !project.repoUrl && (
          <span className="text-xs text-[var(--muted)]">Links coming soon</span>
        )}
      </div>
      <span className="sr-only">Technologies: {techQuery}</span>
    </article>
  );
};

export default ProjectCard;
