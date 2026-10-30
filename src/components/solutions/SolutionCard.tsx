import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { Solution } from '@/data/solutions';

interface SolutionCardProps {
  solution: Solution;
  variant?: 'grid' | 'featured' | 'compact';
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  variant = 'grid',
}) => {
  if (variant === 'featured') {
    return (
      <div
        className="group bg-white rounded-2xl sm:rounded-3xl border border-[#E3EAF0] overflow-hidden lg:grid lg:grid-cols-12 hover:shadow-md transition-all duration-300"
        data-reveal
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:col-span-6 overflow-hidden">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
            <span className="inline-block px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-white/95 text-[#0874C9] shadow-xs">
              {solution.category}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-8 lg:p-10 lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-[#061F49] mb-2 sm:mb-3 group-hover:text-[#0874C9] transition-colors leading-snug">
              <Link to={`/solutions#${solution.id}`} className="touch-manipulation">
                {solution.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mb-4 sm:mb-6">
              {solution.shortDescription}
            </p>

            <div className="space-y-2 mb-4 sm:mb-6">
              {solution.keyBenefits.slice(0, 3).map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#10233F]">
                  <Check className="w-4 h-4 text-[#159A2E] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 sm:pt-0">
            <Link
              to={`/solutions#${solution.id}`}
              className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0874C9] hover:text-[#061F49] transition-colors group/link touch-manipulation"
            >
              <span>{solution.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group bg-white rounded-2xl border border-[#E3EAF0] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:border-slate-300"
      data-reveal
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={solution.image}
            alt={solution.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-semibold bg-white/95 text-[#061F49] shadow-2xs">
              {solution.category}
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2 group-hover:text-[#0874C9] transition-colors leading-snug">
            <Link to={`/solutions#${solution.id}`} className="touch-manipulation">
              {solution.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {solution.shortDescription}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6 pt-0 mt-2 border-t border-slate-50">
        <Link
          to={`/solutions#${solution.id}`}
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0874C9] hover:text-[#061F49] transition-colors touch-manipulation"
        >
          <span>{solution.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
