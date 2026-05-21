import { sections } from '../../data/portfolio';

const Nav = ({ activeIndex, onNavigate }) => {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => (
        <button
          key={section.id}
          type="button"
          onClick={() => onNavigate(index)}
          className="group flex items-center justify-end gap-3"
          aria-label={`Go to ${section.label}`}
          aria-current={activeIndex === index ? 'true' : undefined}
        >
          <span
            className={`pointer-events-none rounded-md bg-[var(--surface)] px-2 py-1 text-xs font-medium text-[var(--text)] opacity-0 shadow-lg transition group-hover:opacity-100 ${
              activeIndex === index ? 'opacity-100' : ''
            }`}
          >
            {section.label}
          </span>
          <span
            className={`block h-2.5 w-2.5 rounded-full border-2 transition ${
              activeIndex === index
                ? 'scale-125 border-[var(--accent)] bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]'
                : 'border-[var(--muted)] bg-transparent group-hover:border-[var(--accent)]'
            }`}
          />
        </button>
      ))}
    </nav>
  );
};

export default Nav;
