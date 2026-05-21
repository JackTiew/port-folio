import { hobbies } from '../../data/portfolio';

const Hobbies = () => {
  return (
    <section className="section-panel hobbies-panel">
      <div className="section-inner flex min-h-0 flex-1 flex-col justify-center gap-8">
        <div className="max-w-3xl">
          <p className="mb-2 font-mono text-sm text-[var(--accent)]">03 — {hobbies.title}</p>
          <h2 className="font-display text-4xl font-bold leading-tight text-[var(--text)] sm:text-5xl">
            {hobbies.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {hobbies.intro}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {hobbies.items.map((item) => (
            <article
              key={item.title}
              className="hobby-card rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 p-6 backdrop-blur-sm transition hover:border-[var(--accent)]/40"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 text-3xl leading-none" aria-hidden>
                  {item.emoji}
                </span>
                <h3 className="font-display text-2xl font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
