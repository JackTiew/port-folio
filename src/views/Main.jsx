import { useRef } from "react";
import Nav from "../components/Main/Nav";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Hobbies from "../components/Hobbies/Hobbies";
import Work from "../components/Work/Work";
import { sections, site } from "../data/portfolio";
import { useFullPageScroll } from "../hooks/useFullPageScroll";

const Main = () => {
  const containerRef = useRef(null);
  const { activeIndex, goTo, isFullPage } = useFullPageScroll(
    sections.length,
    containerRef,
  );

  return (
    <>
      <header className="site-header fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-wide text-[var(--text)]"
        >
          {site.brand}
        </a>
      </header>

      <Nav activeIndex={activeIndex} onNavigate={goTo} />

      <nav
        className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/90 px-3 py-2 backdrop-blur-md md:hidden"
        aria-label="Section navigation"
      >
        {sections.map((section, index) => (
          <button
            key={section.id}
            type="button"
            onClick={() => goTo(index)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              activeIndex === index
                ? "bg-[var(--accent)] text-[var(--bg)]"
                : "text-[var(--muted)] hover:text-[var(--text)]"
            }`}
            aria-current={activeIndex === index ? "true" : undefined}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <div
        ref={containerRef}
        className={
          isFullPage
            ? "component-container h-screen overflow-hidden"
            : "component-container"
        }
      >
        <div id="home" className={isFullPage ? "component-item scroll-down" : undefined}>
          <Home />
        </div>
        <div id="about" className={isFullPage ? "component-item" : undefined}>
          <About />
        </div>
        <div id="work" className={isFullPage ? "component-item" : undefined}>
          <Work />
        </div>
        <div id="hobbies" className={isFullPage ? "component-item" : undefined}>
          <Hobbies />
        </div>
      </div>
    </>
  );
};

export default Main;
