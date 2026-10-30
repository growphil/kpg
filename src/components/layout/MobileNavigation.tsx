import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { contactConfig } from '@/config/contact';
import { PrimaryButton } from '../common/PrimaryButton';
import { Logo } from '../common/Logo';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden overflow-hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#061F49]/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel - using 100dvh for modern mobile browsers */}
      <div
        ref={panelRef}
        className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto h-[100dvh] overscroll-contain transition-transform duration-300 ease-out"
      >
        {/* Top Header inside Drawer */}
        <div className="p-4 sm:p-5 border-b border-[#E3EAF0] flex items-center justify-between shrink-0 bg-white sticky top-0 z-10">
          <Logo variant="mobile" />
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-slate-500 hover:text-[#061F49] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0874C9] cursor-pointer touch-manipulation"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation list */}
        <nav className="p-4 sm:p-5 flex-1 space-y-1.5 overflow-y-auto">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
            Menu Navigation
          </p>
          {siteConfig.navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-base font-semibold transition-all touch-manipulation ${
                  isActive
                    ? 'bg-[#F4F8FB] text-[#0874C9]'
                    : 'text-[#10233F] hover:bg-slate-50 active:bg-slate-100 hover:text-[#0874C9]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#0874C9]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-slate-300" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer Actions inside Drawer with pb-safe */}
        <div className="p-4 sm:p-5 border-t border-[#E3EAF0] bg-[#F4F8FB] space-y-3 shrink-0 pb-safe">
          <PrimaryButton
            to="/contact"
            variant="green"
            size="lg"
            className="w-full shadow-sm"
            onClick={onClose}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Quote
          </PrimaryButton>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={contactConfig.whatsapp.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba5a] active:scale-[0.98] transition-colors touch-manipulation shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`tel:${contactConfig.phone.raw}`}
              className="min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-[#E3EAF0] text-[#061F49] text-xs font-semibold hover:bg-slate-50 active:scale-[0.98] transition-colors touch-manipulation shadow-2xs"
            >
              <Phone className="w-4 h-4 text-[#0874C9] shrink-0" />
              <span>Call Team</span>
            </a>
          </div>

          <div className="text-center pt-1 text-[11px] text-[#64748B] flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#0874C9] shrink-0" />
            <span>{contactConfig.location.fullAddress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
