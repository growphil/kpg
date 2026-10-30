import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { PrimaryButton } from '../common/PrimaryButton';
import { MobileNavigation } from './MobileNavigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E3EAF0] py-2.5 sm:py-3.5'
            : 'bg-white/90 backdrop-blur-xs py-3 sm:py-5 border-b border-slate-100/80'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-2">
            {/* Left: Official KYRA Pacific Green Logo */}
            <div className="flex items-center shrink-0">
              <Logo variant="header" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#F4F8FB]/90 border border-slate-200/70"
              aria-label="Main Navigation"
            >
              {siteConfig.navLinks.map(link => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#0874C9] bg-white shadow-2xs font-bold'
                        : 'text-[#10233F] hover:text-[#0874C9] hover:bg-white/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Primary Conversion Action on Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <PrimaryButton
                to="/contact"
                variant="green"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request a Quote
              </PrimaryButton>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger Menu */}
            <div className="flex lg:hidden items-center gap-1 sm:gap-2">
              <a
                href={contactConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors touch-manipulation"
                aria-label="Quick WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#061F49] hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0874C9] transition-colors touch-manipulation cursor-pointer"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
