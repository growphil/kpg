import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { PrimaryButton } from './PrimaryButton';
import { WhatsAppLink } from './WhatsAppLink';

interface QuoteCTAProps {
  title?: string;
  description?: string;
  className?: string;
}

export const QuoteCTA: React.FC<QuoteCTAProps> = ({
  title = 'Have a Solar Project in Mind?',
  description = 'Tell us about your energy requirements, and connect with KYRA Pacific Green to discuss potential solutions across Papua New Guinea.',
  className = '',
}) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-[#061F49] text-white relative overflow-hidden ${className}`}>
      {/* Ambient gradient glow */}
      <div
        className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#0874C9]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:w-80 bg-[#159A2E]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center" data-reveal>
          <span className="inline-block text-[11px] sm:text-xs md:text-sm font-bold tracking-widest uppercase text-[#FFCA05] mb-2 sm:mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-normal">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <PrimaryButton
              to="/contact"
              variant="green"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request a Quote
            </PrimaryButton>
            <WhatsAppLink
              variant="solid"
              size="lg"
              className="w-full sm:w-auto"
              label="Contact Us on WhatsApp"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
