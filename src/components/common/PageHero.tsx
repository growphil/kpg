import React from 'react';
import { Container } from './Container';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  badge?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  children,
  badge,
  className = '',
}) => {
  return (
    <div
      className={`relative pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#F4F8FB] via-white to-white border-b border-[#E3EAF0] ${className}`}
    >
      {/* Subtle background ambient accents */}
      <div
        className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#0874C9]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-[#159A2E]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#0874C9]/10 text-[#0874C9] mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0874C9]" />
              {badge}
            </div>
          )}

          {eyebrow && (
            <span className="block text-xs md:text-sm font-bold tracking-widest uppercase text-[#159A2E] mb-2 sm:mb-3">
              {eyebrow}
            </span>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#061F49] tracking-tight leading-[1.15] mb-4 sm:mb-5">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed mb-6 sm:mb-8 font-normal">
              {description}
            </p>
          )}

          {children && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {children}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
