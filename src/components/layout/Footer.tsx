import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { brandConfig } from '@/config/brand';
import { contactConfig } from '@/config/contact';
import { siteConfig } from '@/config/site';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { WhatsAppLink } from '../common/WhatsAppLink';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061F49] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800 relative overflow-hidden pb-safe">
      {/* Subtle background glow */}
      <div
        className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#0874C9]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Top CTA Banner in Footer */}
        <div className="pb-8 sm:pb-12 mb-8 sm:mb-12 border-b border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#FFCA05] block mb-1">
              READY TO EXPLORE SOLAR ENERGY?
            </span>
            <p className="text-lg sm:text-2xl font-bold text-white leading-tight">
              Connect with KYRA Pacific Green to discuss your requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#159A2E] hover:bg-[#118025] active:scale-[0.98] text-white transition-all shadow-xs touch-manipulation text-center"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <WhatsAppLink variant="solid" size="md" className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800 text-sm">
          {/* Brand & Introduction Column */}
          <div className="sm:col-span-2 space-y-4">
            <Logo variant="footer" />
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#159A2E] pt-1">
              {brandConfig.tagline}
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              KYRA Pacific Green is focused on bringing solar energy solutions and products to homes, businesses and industries across Papua New Guinea. Practical planning, quality equipment, and business collaboration.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#159A2E]" />
                PNG Registered Solar Partner
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="min-h-[36px] inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors touch-manipulation text-xs sm:text-sm"
                  >
                    <span className="text-slate-500 text-xs">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solar Solutions Column */}
          <div>
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Our Solutions
            </h4>
            <ul className="space-y-2">
              {siteConfig.footerSolutions.map(solution => (
                <li key={solution.label}>
                  <Link
                    to={solution.path}
                    className="min-h-[36px] inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors touch-manipulation text-xs sm:text-sm"
                  >
                    <span className="text-slate-500 text-xs">›</span>
                    <span>{solution.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold tracking-wider uppercase text-white mb-3 sm:mb-4">
              Contact Information
            </h4>
            <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0874C9] shrink-0 mt-0.5" />
                <span>{contactConfig.location.fullAddress}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159A2E] shrink-0" />
                <a
                  href={`tel:${contactConfig.phone.raw}`}
                  className="min-h-[36px] inline-flex items-center hover:text-white transition-colors touch-manipulation"
                >
                  {contactConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFCA05] shrink-0" />
                <a
                  href={contactConfig.email.mailtoLink}
                  className="min-h-[36px] inline-flex items-center hover:text-white transition-colors break-all touch-manipulation"
                >
                  {contactConfig.email.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 text-center sm:text-left">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/contact" className="min-h-[36px] inline-flex items-center hover:text-slate-200 transition-colors touch-manipulation">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link to="/contact" className="min-h-[36px] inline-flex items-center hover:text-slate-200 transition-colors touch-manipulation">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
