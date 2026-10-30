import React from 'react';
import { ArrowRight, Handshake, Truck, Wrench, Building2, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { ContactForm } from '@/components/forms/ContactForm';
import { SEOHead } from '@/components/common/SEOHead';

export const Partnerships: React.FC = () => {
  const partnerTypes = [
    {
      title: 'Solar Dealers & Retailers',
      desc: 'Local electrical shops and solar retailers looking to expand their inventory with quality inverters, battery storage units, panels, and portable kits.',
      icon: <Truck className="w-6 h-6 text-[#0874C9]" />,
    },
    {
      title: 'Solar Installers & EPC Contractors',
      desc: 'Engineering, Procurement, and Construction teams requiring reliable supply lines, technical equipment coordination, and project-based product quotes.',
      icon: <Wrench className="w-6 h-6 text-[#159A2E]" />,
    },
    {
      title: 'Provincial Distributors',
      desc: 'Regional commercial distributors across Papua New Guinea interested in distributing renewable energy equipment within their provincial markets.',
      icon: <Building2 className="w-6 h-6 text-[#FF8500]" />,
    },
    {
      title: 'Institutional & Project Developers',
      desc: 'Organisations, NGOs, and community development partners planning electrification initiatives for schools, healthcare clinics, and rural centres.',
      icon: <Handshake className="w-6 h-6 text-[#061F49]" />,
    },
  ];

  const collaborationAreas = [
    'Solar inverter and battery energy storage procurement',
    'High-efficiency monocrystalline solar panel supply',
    'Pre-configured turnkey solar kit distributions',
    'Technical consultation on hybrid and microgrid sizing',
    'Specialized project-based bulk quotation',
  ];

  return (
    <>
      <SEOHead
        title="B2B Solar Partnerships — Dealers, Installers & EPCs"
        description="Grow solar opportunities with KYRA Pacific Green. Connect with us for solar dealer, distributor, installer, and EPC contractor collaboration across Papua New Guinea."
      />

      {/* Hero */}
      <PageHero
        badge="B2B COLLABORATION"
        title="Grow Solar Opportunities With KYRA Pacific Green"
        description="Are you a solar dealer, distributor, installer or EPC contractor in Papua New Guinea? We welcome the opportunity to discuss equipment supply, project collaboration, and expanding renewable energy access together."
      >
        <PrimaryButton to="#partner-form" variant="green" size="md" className="w-full sm:w-auto">
          Submit Partnership Enquiry
        </PrimaryButton>
        <WhatsAppLink
          variant="outline"
          size="md"
          className="w-full sm:w-auto"
          message="Hello KYRA Pacific Green, I represent a business/contractor interested in exploring a B2B partnership."
          label="Chat on WhatsApp"
        />
      </PageHero>

      <Container className="pt-4 sm:pt-6">
        <Breadcrumbs items={[{ label: 'Partnerships' }]} />
      </Container>

      {/* Section: Who Can Enquire */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#159A2E] block mb-2">
              COLLABORATION NETWORK
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
              Who Can Connect With KYRA
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mt-2">
              We collaborate with varied stakeholders across the Papua New Guinea energy and construction sector to deliver practical solar solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {partnerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-[#F4F8FB] rounded-2xl p-5 sm:p-7 border border-[#E3EAF0] shadow-xs flex flex-col justify-between"
                data-reveal
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white shadow-2xs flex items-center justify-center mb-4 sm:mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2 sm:mb-3">
                    {type.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Areas of Collaboration */}
          <div className="bg-[#061F49] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FFCA05] block">
                AREAS OF POTENTIAL COLLABORATION
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                How We Can Work Together
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                We believe practical partnerships are founded on clear communication, realistic expectations, and mutual value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
                {collaborationAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#159A2E] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Partnership Form */}
      <section id="partner-form" className="py-12 sm:py-16 md:py-24 bg-[#F4F8FB] border-t border-[#E3EAF0]">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0874C9] block mb-2">
              B2B ENQUIRY
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
              Submit a Partnership Enquiry
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mt-2">
              Share details about your business and intended collaboration scope. Our partnership team will contact you to explore next steps.
            </p>
          </div>

          <ContactForm
            defaultEnquiryType="Dealer / Distributor Partnership"
            defaultMessage="We are interested in discussing potential partnership / equipment procurement opportunities with KYRA Pacific Green in Papua New Guinea."
          />
        </Container>
      </section>
    </>
  );
};
