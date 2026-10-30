import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Layers,
  HelpCircle,
  Handshake,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Home as HomeIcon,
  Building2,
  Factory,
  Landmark,
  GraduationCap,
  Truck,
  HardHat,
} from 'lucide-react';
import { brandConfig } from '@/config/brand';
import { contactConfig } from '@/config/contact';
import { productsData } from '@/data/products';
import { solutionsData, sectorsData } from '@/data/solutions';
import { homeFaqData } from '@/data/faq';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { PrimaryButton } from '@/components/common/PrimaryButton';
import { SecondaryButton } from '@/components/common/SecondaryButton';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { ProductCard } from '@/components/products/ProductCard';
import { SolutionCard } from '@/components/solutions/SolutionCard';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { ContactForm } from '@/components/forms/ContactForm';
import { SEOHead } from '@/components/common/SEOHead';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const renderSectorIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return <HomeIcon className="w-5 h-5" />;
    case 'Building2':
      return <Building2 className="w-5 h-5" />;
    case 'Factory':
      return <Factory className="w-5 h-5" />;
    case 'Landmark':
      return <Landmark className="w-5 h-5" />;
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5" />;
    case 'Truck':
      return <Truck className="w-5 h-5" />;
    case 'HardHat':
      return <HardHat className="w-5 h-5" />;
    case 'Sparkles':
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

export const Home: React.FC = () => {
  const heroRevealRef = useGsapReveal<HTMLDivElement>({ y: 25, duration: 0.8, stagger: 0.12 });

  const topSolutions = solutionsData.slice(0, 3);
  const remainingSolutions = solutionsData.slice(3, 8);

  return (
    <>
      <SEOHead
        title="Official Corporate Website"
        description="Powering PNG's Next Era of Solar. Discover smarter solar energy solutions for homes, businesses and industries across Papua New Guinea."
      />

      {/* ========================================================================= */}
      {/* SECTION 01 — HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#061F49]">
        {/* Cinematic Pacific Landscape Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Home page images/home page heor section.webp"
            alt="Papua New Guinea tropical solar landscape with pristine sunrise over mountain valley"
            className="w-full h-full object-cover object-center transform scale-[1.01]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Enhanced multi-layer gradient overlay for 100% mobile text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061F49]/95 via-[#061F49]/80 to-[#061F49]/50 sm:to-[#061F49]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061F49] via-transparent to-[#061F49]/40" />
        </div>

        <Container className="relative z-10 w-full py-6 sm:py-10">
          <div ref={heroRevealRef} className="max-w-3xl text-left">
            {/* Eyebrow */}
            <div data-reveal className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#FFCA05] animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-white uppercase truncate">
                {brandConfig.heroEyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              data-reveal
              className="text-hero-headline font-extrabold text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 drop-shadow-xs"
            >
              {brandConfig.heroHeadline}
            </h1>

            {/* Description */}
            <p
              data-reveal
              className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal"
            >
              {brandConfig.heroDescription}
            </p>

            {/* CTAs - Mobile-first stacking with full touch widths */}
            <div data-reveal className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <PrimaryButton
                to="/solutions"
                variant="green"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Our Solutions
              </PrimaryButton>
              <SecondaryButton
                to="/contact"
                variant="white"
                size="lg"
                className="w-full sm:w-auto"
              >
                Request a Quote
              </SecondaryButton>
            </div>

            {/* Quick credentials / local PNG focus strip */}
            <div data-reveal className="pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-slate-300 text-xs sm:text-sm">
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <p className="font-bold text-white text-sm sm:text-base">Papua New Guinea</p>
                <p className="text-slate-400 text-xs">Serving Local Energy Needs</p>
              </div>
              <div className="bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <p className="font-bold text-white text-sm sm:text-base">On, Off &amp; Hybrid</p>
                <p className="text-slate-400 text-xs">Flexible Topologies</p>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-white/5 sm:bg-transparent p-3 sm:p-0 rounded-xl sm:rounded-none">
                <p className="font-bold text-white text-sm sm:text-base">B2B &amp; Residential</p>
                <p className="text-slate-400 text-xs">Collaborative Partnerships</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — OUR SOLUTIONS */}
      {/* ========================================================================= */}
      <section id="solutions" className="py-14 sm:py-20 md:py-28 bg-[#F4F8FB]">
        <Container>
          <SectionHeading
            eyebrow="OUR SOLUTIONS"
            title="Solar Solutions for Every Need"
            description="Discover solar energy solutions designed around the needs of homes, businesses and industries across Papua New Guinea."
          />

          {/* Top 3 Editorial Solutions */}
          <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
            {topSolutions.map(solution => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                variant="featured"
              />
            ))}
          </div>

          {/* Remaining 5 Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            {remainingSolutions.map(solution => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                variant="grid"
              />
            ))}
          </div>

          {/* B2B Partnership Banner */}
          <div
            className="bg-[#061F49] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm"
            data-reveal
          >
            <div className="max-w-2xl">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block mb-2">
                B2B COLLABORATION
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
                Grow Your Solar Business With KYRA
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Are you a solar dealer, installer, EPC or distributor? Connect with KYRA Pacific Green to explore partnership opportunities across Papua New Guinea.
              </p>
            </div>
            <div className="w-full sm:w-auto shrink-0">
              <PrimaryButton
                to="/partnerships"
                variant="green"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Become a Partner
              </PrimaryButton>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — FEATURED PRODUCTS */}
      {/* ========================================================================= */}
      <section id="products" className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#E3EAF0]">
        <Container>
          <SectionHeading
            eyebrow="OUR PRODUCTS"
            title="Explore Our Solar Products"
            description="Discover solar products for residential, commercial and industrial applications across Papua New Guinea."
          />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {productsData.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center" data-reveal>
            <PrimaryButton
              to="/products"
              variant="navy"
              size="lg"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Products
            </PrimaryButton>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-white to-[#F4F8FB]">
        <Container>
          <SectionHeading
            eyebrow="WHY KYRA PACIFIC GREEN"
            title="Your Partner in Smarter Solar Energy"
            description="We help customers explore solar energy options suited to their needs, with a focus on practical solutions and opportunities across Papua New Guinea."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs flex flex-col justify-between" data-reveal>
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0874C9]/10 text-[#0874C9] flex items-center justify-center mb-4 sm:mb-5">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                  Solutions for Different Needs
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Explore energy options for residential, commercial and industrial applications.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs flex flex-col justify-between" data-reveal>
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#159A2E]/10 text-[#159A2E] flex items-center justify-center mb-4 sm:mb-5">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                  Flexible Energy Approaches
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Discover on-grid, off-grid and hybrid approaches to suit different energy requirements.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs flex flex-col justify-between" data-reveal>
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FF8500]/10 text-[#FF8500] flex items-center justify-center mb-4 sm:mb-5">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                  Guidance for Your Requirements
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Discuss your energy needs to better understand suitable solar system configurations.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E3EAF0] shadow-xs flex flex-col justify-between" data-reveal>
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#061F49]/10 text-[#061F49] flex items-center justify-center mb-4 sm:mb-5">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2">
                  Partnership Opportunities
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Connect with us to explore opportunities for dealers, distributors, installers and EPC companies.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center" data-reveal>
            <SecondaryButton
              to="/about"
              size="md"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Learn More About Us
            </SecondaryButton>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05 — WHO WE SERVE */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-t border-[#E3EAF0]">
        <Container>
          <SectionHeading
            eyebrow="WHO WE SERVE"
            title="Solar Solutions for Every Sector"
            description="We help customers across Papua New Guinea explore solar energy solutions suited to their needs, from residential properties to commercial facilities and public infrastructure."
          />

          {/* Sector Visual Panorama Showcase */}
          <div className="mb-10 sm:mb-12 rounded-2xl overflow-hidden border border-[#E3EAF0] shadow-xs relative aspect-[16/9] sm:aspect-[24/9]" data-reveal>
            <img
              src="/images/our products/WHO WE SERVE.webp"
              alt="Solar energy solutions serving agriculture, healthcare, commercial facilities, schools, and industry across PNG"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061F49]/85 via-transparent to-transparent flex items-end p-4 sm:p-8">
              <p className="text-white text-xs sm:text-base font-medium max-w-xl leading-relaxed">
                Real-world sector deployment spanning food processing, health outposts, hospitality, education, and industrial manufacturing.
              </p>
            </div>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-12 sm:mb-16">
            {sectorsData.map(sector => (
              <div
                key={sector.id}
                className="group relative bg-[#F8FAFC] hover:bg-white rounded-2xl p-5 sm:p-6 border border-[#E3EAF0] hover:border-[#0874C9]/40 flex flex-col justify-between hover:shadow-xl hover:shadow-[#061F49]/5 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                data-reveal
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0874C9] via-[#FF8500] to-[#159A2E] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Header: Icon + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0 ${sector.badgeStyle.bg} ${sector.badgeStyle.text} ${sector.badgeStyle.border} ${sector.badgeStyle.hoverBg}`}
                    >
                      {renderSectorIcon(sector.iconName)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white text-[#64748B] border border-[#E3EAF0] shadow-2xs">
                      {sector.tag}
                    </span>
                  </div>

                  {/* Sector Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#061F49] mb-2 group-hover:text-[#0874C9] transition-colors leading-snug">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {sector.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-1.5 mb-5 pt-3 border-t border-[#E3EAF0]/60">
                    {sector.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#334155]">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0874C9] mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive CTA Link */}
                <Link
                  to={sector.ctaLink}
                  className="mt-auto pt-3 border-t border-[#E3EAF0]/60 min-h-[44px] text-xs font-bold text-[#0874C9] group-hover:text-[#061F49] inline-flex items-center justify-between w-full transition-colors touch-manipulation"
                >
                  <span>{sector.ctaText}</span>
                  <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#0874C9] group-hover:text-white border border-[#E3EAF0] group-hover:border-[#0874C9] flex items-center justify-center transition-all duration-200 shadow-2xs">
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Final Call to Action Box in Sector */}
          <div
            className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#061F49] to-[#0874C9] text-white p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
            data-reveal
          >
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block mb-1">
                PROJECT INQUIRY
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2">
                Have a Solar Project in Mind?
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
                Tell us about your energy requirements, and connect with KYRA Pacific Green to discuss potential solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
              <PrimaryButton
                to="/contact"
                variant="green"
                size="md"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </PrimaryButton>
              <WhatsAppLink variant="solid" size="md" className="w-full sm:w-auto" />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06 — OUR PROCESS */}
      {/* ========================================================================= */}
      <ProcessSection />

      {/* ========================================================================= */}
      {/* SECTION 07 — ABOUT KYRA */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-white border-b border-[#E3EAF0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6" data-reveal>
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#159A2E]">
                ABOUT US
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight leading-tight">
                Powering a Brighter Solar Future for PNG
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
                KYRA Pacific Green focuses on bringing solar energy solutions and products to customers across Papua New Guinea. We aim to support residential customers, businesses and industries as they explore options for their energy requirements.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
                Our focus spans different solar applications, including on-grid, off-grid and hybrid energy solutions, alongside a range of solar products for different needs. We also welcome enquiries from solar dealers, distributors, installers and EPC companies interested in exploring opportunities with us.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <PrimaryButton
                  to="/about"
                  variant="navy"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More About Us
                </PrimaryButton>
                <SecondaryButton
                  to="/partnerships"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto"
                >
                  Become a Partner
                </SecondaryButton>
              </div>
            </div>

            <div className="lg:col-span-6" data-reveal>
              <div className="relative rounded-2xl overflow-hidden border border-[#E3EAF0] shadow-sm">
                <img
                  src="/images/about/about-solar-landscape.png"
                  alt="KYRA Pacific Green solar infrastructure in Papua New Guinea landscape"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] sm:text-xs font-bold uppercase text-[#159A2E]">Official Commitment</p>
                    <p className="text-xs sm:text-sm font-bold text-[#061F49]">Powering a Sustainable Pacific</p>
                  </div>
                  <Sparkles className="w-5 h-5 text-[#FFCA05] shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08 — FAQ */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 md:py-28 bg-[#F4F8FB]">
        <Container size="narrow">
          <SectionHeading
            eyebrow="FAQS"
            title="Your Solar Questions, Answered"
            description="Find answers to common questions about solar energy solutions and our offerings."
          />

          <FAQAccordion items={homeFaqData} className="mb-8 sm:mb-10" />

          <div className="text-center" data-reveal>
            <SecondaryButton
              to="/contact"
              size="md"
              className="w-full sm:w-auto"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Have More Questions? Contact Us
            </SecondaryButton>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09 — CONTACT US */}
      {/* ========================================================================= */}
      <section id="contact-section" className="py-14 sm:py-20 md:py-28 bg-white border-t border-[#E3EAF0]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6" data-reveal>
              <div>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#159A2E] block mb-1.5">
                  LET'S CONNECT
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#061F49] tracking-tight">
                  Let's Discuss Your Solar Needs
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed mt-2">
                  Looking for solar energy options for your home or business? Need guidance on your requirements or interested in a business partnership? Get in touch with KYRA Pacific Green.
                </p>
              </div>

              {/* Direct coordinates cards */}
              <div className="space-y-3 sm:space-y-4 pt-1">
                <a
                  href={contactConfig.whatsapp.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-[#E3EAF0] bg-[#F4F8FB] hover:border-[#25D366] transition-colors touch-manipulation"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">WhatsApp</h4>
                    <p className="text-sm sm:text-base font-bold text-[#061F49]">{contactConfig.whatsapp.display}</p>
                    <p className="text-xs text-[#159A2E] font-medium">Click to start direct chat ›</p>
                  </div>
                </a>

                <a
                  href={contactConfig.email.mailtoLink}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-[#E3EAF0] bg-[#F4F8FB] hover:border-[#0874C9] transition-colors touch-manipulation"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0874C9] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Email</h4>
                    <p className="text-sm sm:text-base font-bold text-[#061F49] break-all">{contactConfig.email.address}</p>
                    <p className="text-xs text-[#0874C9] font-medium">Send project details ›</p>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-4 rounded-xl border border-[#E3EAF0] bg-[#F4F8FB]">
                  <div className="w-10 h-10 rounded-lg bg-[#061F49] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Location</h4>
                    <p className="text-sm sm:text-base font-bold text-[#061F49]">{contactConfig.location.fullAddress}</p>
                    <p className="text-xs text-[#64748B]">Serving all provinces across PNG</p>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <WhatsAppLink variant="solid" size="lg" className="w-full sm:w-auto" label="Chat With Us on WhatsApp" />
              </div>
            </div>

            {/* Interactive Contact Form Column */}
            <div className="lg:col-span-7" data-reveal>
              <ContactForm defaultEnquiryType="Residential Solar" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
