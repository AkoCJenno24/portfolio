import React from 'react';
import type { IconName } from '../../types/portfolio';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className = '',
  ...props
}) => {
  const renderPaths = () => {
    switch (name) {
      case 'web':
        return (
          <>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 9h20M6 6.5h.01M9 6.5h.01m0 6-3 2 3 2m6-4 3 2-3 2" />
          </>
        );
      case 'mobile':
        return (
          <>
            <rect x="6" y="2" width="12" height="20" rx="2" />
            <path d="M10 5h4M11 19h2" />
          </>
        );
      case 'desktop':
        return (
          <>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M9 21h6M12 17v4" />
          </>
        );
      case 'sun':
        return (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        );
      case 'moon':
        return <path d="M20 14a8 8 0 0 1-10-10A8 8 0 1 0 20 14Z" />;
      case 'menu':
        return <path d="M4 6h16M4 12h16M4 18h16" />;
      case 'close':
        return <path d="m6 6 12 12M6 18 18 6" />;
      case 'mail':
        return (
          <>
            <rect x="3" y="5" width="18" height="14" rx="1" />
            <path d="m3 6 9 7 9-7" />
          </>
        );
      case 'github':
        return (
          <path d="M9 19c-5 1-5-2-7-2m14 5v-4a3.5 3.5 0 0 0-1-3c3-.4 6-1.5 6-6a5 5 0 0 0-1.5-3.5A4.5 4.5 0 0 0 19 2s-1.5-.4-4 1a13 13 0 0 0-6 0C6.5 1.6 5 2 5 2a4.5 4.5 0 0 0-.5 3.5A5 5 0 0 0 3 9c0 4.5 3 5.6 6 6a3.5 3.5 0 0 0-1 3v4" />
        );
      case 'linkedin':
        return (
          <>
            <rect x="8" y="8" width="13" height="13" rx="1" />
            <path d="M12 21v-8c0-3 5-3 5 0v8M3 8h2v13H3z" />
            <circle cx="4" cy="3" r="1" />
          </>
        );
      case 'facebook':
        return (
          <path d="M14 22v-9h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-4 0-5 2-5 5v3H7v4h3v9" />
        );
      default:
        return null;
    }
  };

  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {renderPaths()}
    </svg>
  );
};

