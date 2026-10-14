import { useEffect, useState, useRef } from 'react';

interface ScrollHeaderState {
  isScrolled: boolean;
  showBackToTop: boolean;
  headerRef: React.RefObject<HTMLElement | null>;
}

export function useScrollHeader(): ScrollHeaderState {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeaderHeight();
    });

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    let scheduled = false;
    const handleScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 24);
        setShowBackToTop(scrollY > 300);
        scheduled = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, showBackToTop, headerRef };
}

