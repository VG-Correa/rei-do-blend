import type { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variantStyles = {
  primary: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-red-900 hover:from-yellow-300 hover:to-amber-400',
  secondary: 'bg-gradient-to-r from-red-800 to-red-900 text-white hover:from-red-700 hover:to-red-800',
  outline: 'border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center',
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </button>
  );
};
