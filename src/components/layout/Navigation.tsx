import React from 'react';
import type { NavItem } from '../../types/portfolio';

interface NavigationProps {
  items: NavItem[];
  activeId: string;
  isOpen: boolean;
  onLinkClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  activeId,
  isOpen,
  onLinkClick,
}) => {
  return (
    <nav
      id="primary-navigation"
      className={`navigation ${isOpen ? 'is-open' : ''}`.trim()}
      aria-label="Main navigation"
    >
      {items.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? 'location' : undefined}
            onClick={onLinkClick}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
};

