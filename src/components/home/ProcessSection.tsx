import React from 'react';
import { ArrowRight, FileText, Compass, Users, Calculator } from 'lucide-react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { PrimaryButton } from '../common/PrimaryButton';
import { WhatsAppLink } from '../common/WhatsAppLink';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Requirements',
      desc: 'Tell us about your property, business, energy needs and preferred solar solution.',
      icon: <FileText className="w-5 h-5 text-[#0874C9]" />,
    },
    {
      num: '02',
      title: 'Explore Suitable Options',
      desc: 'Discuss potential solar approaches based on your energy requirements.',
      icon: <Compass className="w-5 h-5 text-[#159A2E]" />,
    },
    {
      num: '03',
      title: 'Discuss Your Requirements',
      desc: 'Connect with our team to discuss system needs, technical details and available options.',
      icon: <Users className="w-5 h-5 text-[#FF8500]" />,
    },
    {
      num: '04',
      title: 'Request a Quote',
      desc: 'Request a quotation based on your selected solution and requirements.',
      icon: <Calculator className="w-5 h-5 text-[#061F49]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#F4F8FB] border-y border-[#E3EAF0] relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From Enquiry to Solar Solution"
          description="Our straightforward process helps you discuss your requirements and explore suitable options with our team."
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative mb-10 sm:mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E3EAF0] shadow-xs relative flex flex-col justify-between"
              data-reveal
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-300 font-mono">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F4F8FB] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2 sm:mb-2.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0874C9]">
                <span>Step {step.num}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto" data-reveal>
          <PrimaryButton
            to="/contact"
            variant="green"
            size="md"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Quote
          </PrimaryButton>
          <WhatsAppLink
            variant="outline"
            size="md"
            className="w-full sm:w-auto"
            label="Chat With Us on WhatsApp"
          />
        </div>
      </Container>
    </section>
  );
};
