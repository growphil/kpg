import React from 'react';
import { Link } from 'react-router-dom';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'outline' | 'subtle' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  to,
  href,
  variant = 'outline',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none text-center cursor-pointer touch-manipulation';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 min-h-[40px] gap-1.5',
    md: 'text-sm px-5 py-3 min-h-[44px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 min-h-[48px] gap-2.5',
  }[size];

  const variantStyles = {
    outline:
      'border border-[#E3EAF0] bg-white text-[#10233F] hover:bg-slate-50 hover:border-[#0874C9] focus-visible:ring-[#0874C9] shadow-2xs',
    subtle:
      'bg-[#F4F8FB] text-[#061F49] hover:bg-slate-200/80 focus-visible:ring-[#061F49]',
    white:
      'bg-white text-[#061F49] hover:bg-slate-100 hover:text-[#0874C9] shadow-sm focus-visible:ring-white',
  }[variant];

  const fullClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClasses}>
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={fullClasses} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {icon && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={fullClasses} {...props}>
      <span>{children}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};
