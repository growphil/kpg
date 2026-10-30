import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'green' | 'navy' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'green',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] select-none text-center cursor-pointer touch-manipulation';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 min-h-[40px] gap-1.5',
    md: 'text-sm px-5 py-3 min-h-[44px] gap-2',
    lg: 'text-sm sm:text-base px-6 py-3.5 min-h-[48px] gap-2.5',
  }[size];

  const variantStyles = {
    green:
      'bg-[#159A2E] hover:bg-[#118025] text-white focus-visible:ring-[#159A2E] shadow-[#159A2E]/20',
    navy:
      'bg-[#061F49] hover:bg-[#0a2f6c] text-white focus-visible:ring-[#061F49] shadow-[#061F49]/20',
    blue:
      'bg-[#0874C9] hover:bg-[#075fa5] text-white focus-visible:ring-[#0874C9] shadow-[#0874C9]/20',
  }[variant];

  const fullClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={fullClasses}>
        <span>{children}</span>
        {icon && <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
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
