import { home, site } from "../../data/portfolio";
import EmailButton from "./EmailButton";
import TechStack from "./TechStack";

const Home = () => {
  return (
    <section className="section-panel home-panel relative overflow-hidden">
      <div className="home-glow" aria-hidden />
      <div className="section-inner relative z-10 grid min-h-0 flex-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div>
            <p className="mb-2 text-lg text-[var(--muted)]">{home.greeting}</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              {home.headline}
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {home.subline}
          </p>
          <p className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--text)]">
              {site.role}
            </span>
            <span aria-hidden>·</span>
            <span className="flex items-center gap-10">
              <span className="flex items-center gap-2">
                <span>{site.location}</span>
                <img
                  className="h-4 w-4 rounded-full"
                  src={site.flagUrl}
                  alt=""
                />
              </span>
              <span className="flex items-center gap-3">
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="group relative inline-flex h-10 w-10 items-center justify-center"
                >
                  <img
                    alt=""
                    className="h-8 w-8 opacity-90 transition group-hover:opacity-0"
                    src="/assets/icons/linkedin-white.svg"
                  />
                  <img
                    alt=""
                    className="absolute h-8 w-8 opacity-0 transition group-hover:opacity-100"
                    src="/assets/icons/linkedin-color.svg"
                  />
                </a>
                <EmailButton />
              </span>
            </span>
          </p>
          <TechStack className="pt-2" />
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="home-avatar">
            <img src="/assets/profile-photo(2).png" alt={site.name} />
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden>
        <span className="text-xs uppercase tracking-widest text-[var(--muted)]">
          Scroll
        </span>
        <span className="scroll-hint-line" />
      </div>
    </section>
  );
};

export default Home;
