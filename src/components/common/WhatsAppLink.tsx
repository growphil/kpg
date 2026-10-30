import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '@/config/contact';

interface WhatsAppLinkProps {
  label?: string;
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'subtle';
  className?: string;
}

export const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  label = 'Chat on WhatsApp',
  message,
  size = 'md',
  variant = 'solid',
  className = '',
}) => {
  const url = contactConfig.whatsapp.getLink(message);

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2.5 min-h-[40px] gap-1.5',
    md: 'text-sm px-4.5 py-3 min-h-[44px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 min-h-[48px] gap-2.5',
  }[size];

  const variantClasses = {
    solid:
      'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xs shadow-[#25D366]/25 focus-visible:ring-[#25D366]',
    outline:
      'border border-[#25D366] text-[#128C7E] bg-white hover:bg-[#25D366]/10 focus-visible:ring-[#25D366]',
    subtle:
      'bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 focus-visible:ring-[#25D366]',
  }[variant];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer touch-manipulation ${sizeClasses} ${variantClasses} ${className}`}
      aria-label={`WhatsApp KYRA Pacific Green at ${contactConfig.phone.display}`}
    >
      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
};
