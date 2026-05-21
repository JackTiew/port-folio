import { techStack } from '../../data/portfolio';

const TechStack = ({ className = '', iconClassName = 'h-9 w-9 sm:h-10 sm:w-10' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
        Tech stack
      </span>
      <span className="hidden h-4 w-px bg-[var(--border)] sm:block" aria-hidden />
      <div className="flex flex-wrap items-center gap-2">
        {techStack.map((tech) => (
          <img
            key={tech}
            className={`${iconClassName} shake-button cursor-default transition-transform hover:scale-110`}
            src={`https://skillicons.dev/icons?i=${tech}`}
            alt={tech}
            title={tech}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
