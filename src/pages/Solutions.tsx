import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { QuoteCTA } from '@/components/common/QuoteCTA';
import { SEOHead } from '@/components/common/SEOHead';
import { solutionsData } from '@/data/solutions';

const SOLUTION_FILTERS = ['All Solutions', 'Scale', 'Grid Connection', 'Specialized'] as const;

export const Solutions: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Solutions');

  const filteredSolutions =
    activeFilter === 'All Solutions'
      ? solutionsData
      : solutionsData.filter(s => s.category === activeFilter);

  return (
    <>
      <SEOHead
        title="Solar Solutions for Homes, Businesses & Industry"
        description="Explore solar energy solutions for Papua New Guinea: residential, commercial, industrial, on-grid, off-grid, hybrid solar, and backup power."
      />

      {/* Hero */}
      <PageHero
        badge="OUR SOLUTIONS"
        title="Solar Solutions for Every Need"
        description="Discover solar energy solutions designed around the needs of homes, businesses and industries across Papua New Guinea. From urban grid-connected rooftops to remote island microgrids."
      >
        <PrimaryButton to="#solutions-list" variant="green" size="md" className="w-full sm:w-auto">
          Explore Solutions
        </PrimaryButton>
        <PrimaryButton to="/contact" variant="navy" size="md" className="w-full sm:w-auto">
          Discuss Your Project
        </PrimaryButton>
      </PageHero>

      <Container className="pt-4 sm:pt-6">
        <Breadcrumbs items={[{ label: 'Solutions' }]} />
      </Container>

      {/* Solutions Navigation / Filter Tabs */}
      <section id="solutions-list" className="py-8 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-12 scrollbar-none touch-pan-x">
            {SOLUTION_FILTERS.map(filter => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
                    isSelected
                      ? 'bg-[#061F49] text-white shadow-2xs font-bold'
                      : 'bg-[#F4F8FB] text-[#10233F] hover:bg-slate-200/70 border border-slate-200/60 active:bg-slate-200'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          {/* Solutions Detailed Editorial List */}
          <div className="space-y-10 sm:space-y-16">
            {filteredSolutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={solution.id}
                  id={solution.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#E3EAF0] overflow-hidden shadow-xs scroll-mt-24 sm:scroll-mt-28"
                  data-reveal
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                    {/* Visual Media Column */}
                    <div
                      className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full overflow-hidden ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover min-h-[220px] sm:min-h-[300px] lg:min-h-[460px]"
                        loading="lazy"
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#061F49] text-white">
                          {solution.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div
                      className={`lg:col-span-6 p-5 sm:p-8 lg:p-12 space-y-4 sm:space-y-6 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#159A2E] block mb-1.5 sm:mb-2">
                          SOLUTION 0{index + 1}
                        </span>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#061F49] tracking-tight mb-2 sm:mb-3 leading-tight">
                          {solution.title}
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mb-3 sm:mb-4">
                          {solution.shortDescription}
                        </p>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {solution.detailedDescription}
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#061F49] mb-2 sm:mb-3">
                          Key Benefits
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                          {solution.keyBenefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#10233F]">
                              <CheckCircle2 className="w-4 h-4 text-[#159A2E] shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential Applications */}
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#061F49] mb-2">
                          Potential Applications
                        </h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {solution.potentialApplications.map((app, i) => (
                            <span
                              key={i}
                              className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-[#F4F8FB] text-[#061F49] border border-slate-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                        <PrimaryButton
                          to={`/contact?type=${encodeURIComponent(solution.title)}`}
                          variant="green"
                          size="md"
                          className="w-full sm:w-auto"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          {solution.ctaText}
                        </PrimaryButton>
                        <WhatsAppLink
                          variant="subtle"
                          size="md"
                          className="w-full sm:w-auto"
                          message={`Hello KYRA Pacific Green, I would like to explore your ${solution.title}.`}
                          label="Discuss on WhatsApp"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quote Banner */}
      <QuoteCTA
        title="Ready to Plan Your Solar Setup?"
        description="Share your location, current power connection, and daily requirements with KYRA Pacific Green for a tailored discussion."
      />
    </>
  );
};
