import React from 'react';
import { Link } from 'react-router-dom';
import { brandConfig } from '@/config/brand';

interface LogoProps {
  variant?: 'header' | 'mobile' | 'footer' | 'badge';
  className?: string;
  showLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showLink = true,
}) => {
  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {variant === 'footer' ? (
        <div className="bg-white rounded-lg p-2.5 shadow-sm inline-flex items-center justify-center border border-slate-200">
          <img
            src={brandConfig.assets.logo}
            alt="KYRA PACIFIC GREEN — Powering a Sustainable Pacific"
            className="h-10 sm:h-12 w-auto object-contain"
            loading="lazy"
          />
        </div>
      ) : variant === 'mobile' ? (
        <div className="bg-white rounded-md p-1.5 shadow-xs inline-flex items-center justify-center border border-slate-200">
          <img
            src={brandConfig.assets.logo}
            alt="KYRA PACIFIC GREEN"
            className="h-8 w-auto object-contain"
          />
        </div>
      ) : (
        <div className="bg-white rounded-lg p-1.5 shadow-xs inline-flex items-center justify-center border border-slate-200 hover:border-slate-300 transition-colors">
          <img
            src={brandConfig.assets.logo}
            alt="KYRA PACIFIC GREEN — Powering a Sustainable Pacific"
            className="h-9 sm:h-11 w-auto object-contain"
          />
        </div>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link
        to="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0874C9] rounded-lg"
        aria-label="KYRA PACIFIC GREEN Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};

