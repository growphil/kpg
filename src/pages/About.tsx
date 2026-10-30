import React from 'react';
import { ArrowRight, Target, Eye, Compass, HeartHandshake, MapPin } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { SEOHead } from '@/components/common/SEOHead';
import { contactConfig } from '@/config/contact';
import { brandConfig } from '@/config/brand';

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us — Corporate Profile & Mission"
        description="A New Perspective on Solar Energy for Papua New Guinea. Learn about KYRA Pacific Green, our mission, vision, values, and commitment to local sustainable development."
      />

      {/* Hero */}
      <PageHero
        badge="ABOUT KYRA PACIFIC GREEN"
        title="A New Perspective on Solar Energy for Papua New Guinea"
        description="KYRA Pacific Green is a solar energy business focused on creating opportunities for wider solar adoption across Papua New Guinea. We bring together an interest in renewable energy, practical energy planning and business collaboration to serve the evolving needs of the PNG market."
      >
        <PrimaryButton to="/contact" variant="green" size="md" className="w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
          Connect With Our Team
        </PrimaryButton>
        <WhatsAppLink variant="outline" size="md" className="w-full sm:w-auto" />
      </PageHero>

      <Container className="pt-4 sm:pt-6">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </Container>

      {/* Section: Overview & Core Focus */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#159A2E]">
                OUR FOCUS
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
                Understanding Local Requirements
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
                Our focus is on understanding local energy requirements and helping customers explore suitable solar energy options for their homes, businesses and organisations.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
                Papua New Guinea presents unique geographical diversity—from coastal communities to highland valleys and bustling urban centres. We tailor each conversation to the physical reality of the site, ensuring practical energy configurations.
              </p>
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#F4F8FB] border border-[#E3EAF0] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#0874C9] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#061F49]">
                  Proudly serving customers across Papua New Guinea from {contactConfig.location.town}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3EAF0] shadow-sm">
                <img
                  src="/images/about/about-solar-landscape.png"
                  alt="KYRA Pacific Green solar infrastructure in PNG"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-xs p-3 sm:p-4 rounded-xl border border-slate-200">
                  <p className="text-[11px] sm:text-xs font-bold uppercase text-[#159A2E]">{brandConfig.companyName}</p>
                  <p className="text-xs sm:text-sm font-bold text-[#061F49]">{brandConfig.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Our Story */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#F4F8FB] border-y border-[#E3EAF0]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#0874C9]">
              OUR STORY
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
              Building Opportunities Through Solar Energy
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#64748B] leading-relaxed">
              Papua New Guinea has diverse energy needs across urban centres, commercial areas, industrial facilities and remote communities. These different environments create opportunities to explore solar energy in ways that suit local requirements.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
              KYRA Pacific Green was established with a focus on serving this market through solar energy opportunities and relationships with customers and industry partners.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
              We aim to develop meaningful connections that help customers understand their options and move forward with greater clarity when considering solar energy.
            </p>
          </div>
        </Container>
      </section>

      {/* Section: Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E3EAF0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#159A2E]/10 text-[#159A2E] flex items-center justify-center mb-5 sm:mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#159A2E] block mb-2">
                  OUR MISSION
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#061F49] mb-3 sm:mb-4">
                  To Support Smarter Energy Decisions
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mb-3 sm:mb-4">
                  Our mission is to help customers make informed decisions about solar energy by encouraging practical planning, clear communication and solutions aligned with their requirements.
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  We aim to build lasting relationships with customers and partners through a professional, customer-focused approach.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#061F49] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-[#0874C9]/20 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 text-[#FFCA05] flex items-center justify-center mb-5 sm:mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block mb-2">
                  OUR VISION
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Contributing to PNG's Solar Energy Future
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-3 sm:mb-4">
                  Our vision is to contribute to the growth of solar energy opportunities across Papua New Guinea by connecting customers, businesses and industry partners with relevant solutions.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We aspire to support a more diverse energy landscape where solar power can play a meaningful role in residential, commercial and industrial applications.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: What Guides Us */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#F4F8FB] border-y border-[#E3EAF0]">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#159A2E] block mb-2">
              CORE VALUES
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
              What Guides Us
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mt-2">
              Our principles shape every interaction with homeowners, business managers, community leaders, and industry partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#0874C9]/10 text-[#0874C9] flex items-center justify-center mb-4 sm:mb-5">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                Customer-Focused Thinking
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We begin by understanding each customer's needs, priorities and intended application.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#159A2E]/10 text-[#159A2E] flex items-center justify-center mb-4 sm:mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                Practical Approach
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We recognise that energy requirements vary by location, property and business operation. We encourage consideration of these differences when exploring solar options.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#FF8500]/10 text-[#FF8500] flex items-center justify-center mb-4 sm:mb-5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We value connections with customers, dealers, distributors, installers, EPC companies and other relevant industry participants.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#061F49]/10 text-[#061F49] flex items-center justify-center mb-4 sm:mb-5">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                Long-Term Perspective
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                We believe that clear communication, realistic expectations and strong working relationships are important when exploring energy solutions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Section: Commitment to PNG & Invitation */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <Container>
          <div className="bg-gradient-to-br from-[#061F49] via-[#061F49] to-[#0874C9] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 text-white relative overflow-hidden">
            <div className="max-w-3xl space-y-4 sm:space-y-6 relative z-10">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block">
                OUR COMMITMENT TO PAPUA NEW GUINEA
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Growing Through Local Understanding and Partnerships
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed">
                We recognise that Papua New Guinea has diverse geographical conditions, infrastructure needs and energy requirements. Our approach is to listen to customers, understand their priorities and explore relevant opportunities in the local market.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                We welcome conversations with businesses, organisations and potential partners interested in developing solar energy opportunities across PNG.
              </p>

              <div className="pt-4 border-t border-white/20">
                <h3 className="text-base sm:text-xl font-bold text-white mb-2">
                  Let's Build Solar Opportunities Together
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Your Energy Goals. Our Shared Focus. Whether you represent a business, organisation or solar industry company, we welcome the opportunity to understand your goals and discuss potential ways to work together.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <PrimaryButton
                    to="/contact"
                    variant="green"
                    size="md"
                    className="w-full sm:w-auto"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Contact KYRA Pacific Green
                  </PrimaryButton>
                  <SecondaryButton
                    to="/partnerships"
                    variant="white"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Explore Partnership Opportunities
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
