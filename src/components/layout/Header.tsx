import React, { useState, useEffect, useRef } from 'react';
import type { NavItem } from '../../types/portfolio';
import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../ui/Icon';
import { Navigation } from './Navigation';

interface HeaderProps {
  items: NavItem[];
  activeId: string;
  isScrolled: boolean;
  headerRef: React.RefObject<HTMLElement | null>;
}

export const Header: React.FC<HeaderProps> = ({
  items,
  activeId,
  isScrolled,
  headerRef,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, headerRef]);

  // Close menu on resize above 800px
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleMediaChange = () => {
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header
      ref={headerRef}
      className={`site-header ${isScrolled ? 'is-scrolled' : ''}`.trim()}
    >
      <div className="header-content container">
        <a className="brand" href="#home" aria-label="Portfolio home">
          Portfolio
        </a>

        <Navigation
          items={items}
          activeId={activeId}
          isOpen={isMenuOpen}
          onLinkClick={handleLinkClick}
        />

        <div className="header-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            aria-pressed={isDark}
          >
            <Icon name={isDark ? 'moon' : 'sun'} />
          </button>

          <button
            ref={menuButtonRef}
            className="icon-button menu-toggle"
            type="button"
            onClick={handleToggleMenu}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
};

