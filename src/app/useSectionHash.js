import { useEffect } from 'react';

// Keeps the URL hash in sync with the section crossing the middle of the viewport while scrolling
const useSectionHash = (ids) => {
  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        const id = visible.target.id;
        // The hero is the top of the page, so it keeps a clean URL
        const next = id === 'hero' ? window.location.pathname + window.location.search : `#${id}`;
        if (window.location.hash !== (id === 'hero' ? '' : `#${id}`)) {
          window.history.replaceState(null, '', next);
        }
      },
      // Thin band at the middle of the viewport: one section at a time is "current"
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);
};

export default useSectionHash;
