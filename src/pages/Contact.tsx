import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { PageHero } from '@/components/common/PageHero';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { WhatsAppLink } from '@/components/common/WhatsAppLink';
import { ContactForm } from '@/components/forms/ContactForm';
import { FAQAccordion } from '@/components/common/FAQAccordion';
import { SEOHead } from '@/components/common/SEOHead';
import { contactConfig } from '@/config/contact';
import { contactFaqData } from '@/data/faq';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || 'Residential Solar';
  const initialProduct = searchParams.get('product') || '';

  const initialMessage = initialProduct
    ? `I would like to enquire about technical specifications and pricing for: ${initialProduct}.`
    : '';

  return (
    <>
      <SEOHead
        title="Contact KYRA Pacific Green — Kasupe, PNG"
        description="Let's talk about your solar needs. Reach KYRA Pacific Green via WhatsApp, email or enquiry form for residential, commercial, industrial or institutional solar projects."
      />

      {/* Hero */}
      <PageHero
        badge="GET IN TOUCH"
        title="Let's Talk About Your Solar Needs"
        description="Whether you're exploring solar energy for your home, business, industrial facility or government project, we're here to hear about your requirements. Contact KYRA Pacific Green to discuss your needs and explore available options across Papua New Guinea."
      >
        <WhatsAppLink variant="solid" size="md" className="w-full sm:w-auto" label="Chat With Us on WhatsApp" />
        <a
          href="#enquiry-form"
          className="min-h-[44px] inline-flex items-center justify-center font-semibold rounded-xl px-5 py-3 text-sm bg-[#061F49] text-white hover:bg-[#0a2f6c] transition-colors w-full sm:w-auto touch-manipulation"
        >
          Send an Enquiry
        </a>
      </PageHero>

      <Container className="pt-4 sm:pt-6">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
      </Container>

      {/* Main Contact Grid */}
      <section className="py-8 sm:py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Direct Coordinates Column */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#159A2E] block mb-1.5 sm:mb-2">
                  DIRECT CONTACT
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#061F49] tracking-tight mb-2 sm:mb-3 leading-tight">
                  Get in Touch
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed">
                  Have a question about our services, products or partnership opportunities? Reach out directly to our team in Papua New Guinea.
                </p>
              </div>

              {/* Coordinates Cards */}
              <div className="space-y-3 sm:space-y-4">
                {/* WhatsApp */}
                <div className="p-4 sm:p-6 rounded-2xl border border-[#E3EAF0] bg-[#F4F8FB] hover:border-[#25D366] transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        WhatsApp
                      </h3>
                      <p className="text-xs text-[#64748B] mb-1">
                        Contact us directly to discuss your requirements.
                      </p>
                      <p className="text-base sm:text-lg font-bold text-[#061F49] mb-2 sm:mb-3">
                        {contactConfig.whatsapp.display}
                      </p>
                      <WhatsAppLink
                        variant="solid"
                        size="sm"
                        label="Start a WhatsApp Chat"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 sm:p-6 rounded-2xl border border-[#E3EAF0] bg-[#F4F8FB] hover:border-[#0874C9] transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0874C9] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        Email
                      </h3>
                      <p className="text-xs text-[#64748B] mb-1">
                        Send us your enquiry or share details about your project.
                      </p>
                      <p className="text-sm sm:text-lg font-bold text-[#061F49] mb-2 sm:mb-3 break-all">
                        {contactConfig.email.address}
                      </p>
                      <a
                        href={contactConfig.email.mailtoLink}
                        className="min-h-[40px] inline-flex items-center justify-center text-xs font-semibold px-4 py-2 rounded-xl bg-[#0874C9] text-white hover:bg-[#075fa5] transition-colors touch-manipulation"
                      >
                        Send an Email
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 sm:p-6 rounded-2xl border border-[#E3EAF0] bg-[#F4F8FB]">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#061F49] text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B]">
                        Location
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-[#061F49] mb-1">
                        {contactConfig.location.fullAddress}
                      </p>
                      <p className="text-xs text-[#64748B]">
                        Serving nationwide enquiries across all PNG provinces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating notice */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#64748B] flex items-center gap-2.5 sm:gap-3">
                <Clock className="w-4 h-4 text-[#0874C9] shrink-0" />
                <span>Hours: {contactConfig.operatingHours}</span>
              </div>
            </div>

            {/* Interactive Form Column */}
            <div id="enquiry-form" className="lg:col-span-7 scroll-mt-24 sm:scroll-mt-28">
              <div className="mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0874C9] block mb-1">
                  SEND US AN ENQUIRY
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#061F49]">
                  Tell Us What You Need
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Share a few details about your requirements so we can understand your enquiry.
                </p>
              </div>

              <ContactForm
                defaultEnquiryType={initialType}
                defaultMessage={initialMessage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#F4F8FB] border-t border-[#E3EAF0]">
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#159A2E] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#061F49] tracking-tight leading-tight">
              Frequently Asked Contact Questions
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[#64748B] mt-2">
              Quick answers about contacting us, requesting product quotations, and business partnerships.
            </p>
          </div>

          <FAQAccordion items={contactFaqData} />
        </Container>
      </section>
    </>
  );
};
