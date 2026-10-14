import { useEffect, useState } from 'react';

/**
 * Custom hook to track active section ID as user scrolls through the page.
 * @param sectionIds Array of section element IDs to observe
 * @returns Active section ID string
 */
export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    let scheduled = false;

    const checkActiveSection = () => {
      const header = document.querySelector('.site-header');
      const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80;
      const activationOffset = headerHeight + 30;

      // When scrolled near the very bottom of page, activate the last section
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= activationOffset) {
            current = id;
          }
        }
      }

      setActiveId(current);
    };

    const handleScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        checkActiveSection();
        scheduled = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    // Initial check
    checkActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}

