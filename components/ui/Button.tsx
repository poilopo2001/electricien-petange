import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-600 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95',
      accent:
        'bg-accent text-white hover:bg-accent-600 shadow-accent shadow-2xl hover:shadow-accent/60 hover:scale-105 active:scale-95 animate-pulse-glow',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95',
      outline:
        'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
