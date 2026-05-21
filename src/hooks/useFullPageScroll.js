import { useCallback, useEffect, useRef, useState } from 'react';

const SCROLL_CLASSES = ['scroll-up', 'scroll-down', 'scroll-hide'];
const DESKTOP_QUERY = '(min-width: 48rem)';

function getPrevIndex(index, size) {
  return index === 0 ? size - 1 : index - 1;
}

function getNextIndex(index, size) {
  return index === size - 1 ? 0 : index + 1;
}

function applyScrollAnimation(container, prevIndex, nextIndex) {
  const items = container?.children;
  if (!items?.length) return;

  const prev = items[prevIndex];
  const next = items[nextIndex];
  if (!prev || !next) return;

  prev.classList.remove(...SCROLL_CLASSES);
  next.classList.remove('scroll-hide');
  next.classList.add(nextIndex > prevIndex ? 'scroll-down' : 'scroll-up');
  prev.classList.add('scroll-hide');
}

function clearScrollLayout(container) {
  const items = container?.children;
  if (!items?.length) return;
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove(...SCROLL_CLASSES);
  }
}

export function useFullPageScroll(sectionCount, containerRef) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullPage, setIsFullPage] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(DESKTOP_QUERY).matches : true,
  );
  const indexRef = useRef(0);
  const lockedRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsFullPage(media.matches);
    onChange();
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!isFullPage) {
      clearScrollLayout(containerRef.current);
    }
  }, [isFullPage, containerRef]);

  const goTo = useCallback(
    (targetIndex) => {
      if (targetIndex < 0 || targetIndex >= sectionCount) return;
      if (targetIndex === indexRef.current) return;

      const container = containerRef.current;

      if (!isFullPage) {
        container?.children[targetIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        indexRef.current = targetIndex;
        setActiveIndex(targetIndex);
        return;
      }

      if (!container || lockedRef.current) return;

      lockedRef.current = true;
      const prev = indexRef.current;
      applyScrollAnimation(container, prev, targetIndex);
      indexRef.current = targetIndex;
      setActiveIndex(targetIndex);

      window.setTimeout(() => {
        lockedRef.current = false;
      }, 520);
    },
    [sectionCount, containerRef, isFullPage],
  );

  const scrollByDirection = useCallback(
    (direction) => {
      const current = indexRef.current;
      const next =
        direction === 'down' ? getNextIndex(current, sectionCount) : getPrevIndex(current, sectionCount);

      if (direction === 'down' && current === sectionCount - 1) return;
      if (direction === 'up' && current === 0) return;

      goTo(next);
    },
    [goTo, sectionCount],
  );

  useEffect(() => {
    if (!isFullPage) return;

    const onWheel = (event) => {
      if (!event.deltaY || lockedRef.current) return;
      event.preventDefault();
      scrollByDirection(event.deltaY > 0 ? 'down' : 'up');
    };

    const onKeyDown = (event) => {
      if (lockedRef.current) return;
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        scrollByDirection('down');
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        scrollByDirection('up');
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [scrollByDirection, isFullPage]);

  useEffect(() => {
    if (isFullPage) return;

    const container = containerRef.current;
    if (!container?.children.length) return;

    const sections = Array.from(container.children);

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (!best) return;

        const index = sections.indexOf(best.target);
        if (index >= 0 && index !== indexRef.current) {
          indexRef.current = index;
          setActiveIndex(index);
        }
      },
      { root: null, rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isFullPage, containerRef, sectionCount]);

  return { activeIndex, goTo, isFullPage };
};
