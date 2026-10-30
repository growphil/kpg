import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faq';

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  className = '',
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-2.5 sm:space-y-3 ${className}`}>
      {items.map(item => {
        const isOpen = openIds.includes(item.id);
        const contentId = `faq-content-${item.id}`;
        const headerId = `faq-header-${item.id}`;

        return (
          <div
            key={item.id}
            className="border border-[#E3EAF0] bg-white rounded-xl sm:rounded-2xl overflow-hidden transition-colors hover:border-slate-300"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggle(item.id)}
                className="w-full min-h-[48px] flex items-center justify-between text-left p-4 sm:p-5 text-sm sm:text-base font-bold text-[#061F49] hover:text-[#0874C9] transition-colors gap-3 cursor-pointer focus:outline-none focus-visible:bg-slate-50 touch-manipulation"
              >
                <span className="leading-snug">{item.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F4F8FB] text-[#061F49] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#0874C9]/10 text-[#0874C9]' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className={`transition-all duration-300 ease-in-out px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm md:text-base text-[#64748B] leading-relaxed ${
                isOpen ? 'block opacity-100 pt-0' : 'hidden opacity-0'
              }`}
            >
              <div className="pt-2 border-t border-slate-100">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
