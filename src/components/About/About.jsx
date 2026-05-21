import { about } from "../../data/portfolio";

const About = () => {
  return (
    <section className="section-panel about-panel">
      <div className="section-inner flex min-h-0 flex-1 flex-col justify-center gap-6">
        <div>
          <p className="mb-2 font-mono text-sm text-[var(--accent)]">
            01 — {about.title}
          </p>
          <h2 className="font-display text-4xl font-bold leading-tight text-[var(--text)] sm:text-5xl">
            {about.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {about.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {about.strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6 backdrop-blur-sm transition hover:border-[var(--accent)]/40"
            >
              <h3 className="font-display text-xl font-semibold text-[var(--text)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
