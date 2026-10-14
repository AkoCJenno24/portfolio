import React from 'react';

interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export const SkipLink: React.FC<SkipLinkProps> = ({
  targetId = 'home',
  label = 'Skip to content',
}) => {
  return (
    <a className="skip-link" href={`#${targetId}`}>
      {label}
    </a>
  );
};

