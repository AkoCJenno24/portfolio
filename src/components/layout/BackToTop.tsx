import React from 'react';

interface BackToTopProps {
  visible: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ visible }) => {
  if (!visible) return null;

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const brandElement = document.querySelector<HTMLElement>('.brand');
    brandElement?.focus({ preventScroll: true });

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'instant' : 'smooth',
    });
  };

  return (
    <button
      className="button button-primary back-to-top"
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      Back to top
    </button>
  );
};

