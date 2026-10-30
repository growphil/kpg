import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-8 sm:mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
      data-reveal
    >
      {eyebrow && (
        <span
          className={`inline-block text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase mb-2 sm:mb-3 ${
            isDark ? 'text-[#FFCA05]' : 'text-[#159A2E]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight ${
          isDark ? 'text-white' : 'text-[#061F49]'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } max-w-3xl ${
            isDark ? 'text-slate-300' : 'text-[#64748B]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
