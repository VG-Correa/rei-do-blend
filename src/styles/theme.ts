export const theme = {
  colors: {
    primary: {
      DEFAULT: '#991B1B', // red-900
      light: '#B91C1C', // red-800
      dark: '#7F1D1D', // red-950
      hover: '#DC2626', // red-600
    },
    secondary: {
      DEFAULT: '#F59E0B', // yellow-500
      light: '#FBBF24', // yellow-400
      dark: '#D97706', // yellow-600
      hover: '#F59E0B', // yellow-500
    },
    text: {
      primary: '#1F2937', // gray-800
      secondary: '#4B5563', // gray-600
      white: '#FFFFFF',
      muted: 'rgba(255, 255, 255, 0.8)',
    },
    background: {
      primary: '#991B1B', // red-900
      secondary: '#F3F4F6', // gray-100
      white: '#FFFFFF',
      dark: '#111827', // gray-900
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: '#E5E7EB', // gray-200
    }
  },
  gradients: {
    primary: 'bg-gradient-to-br from-red-900 via-red-800 to-red-900',
    secondary: 'bg-gradient-to-r from-yellow-400 to-amber-500',
    hero: 'bg-gradient-to-br from-red-900 via-red-900 to-red-800',
    card: 'bg-gradient-to-br from-red-800 to-red-900',
  },
  spacing: {
    section: 'py-20',
    container: 'px-4',
  },
  borderRadius: {
    DEFAULT: '0.5rem',
    full: '9999px',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    heading: {
      1: 'text-5xl md:text-7xl font-bold',
      2: 'text-4xl md:text-5xl font-bold',
      3: 'text-2xl md:text-3xl font-bold',
      4: 'text-xl font-bold',
    },
    body: {
      large: 'text-xl',
      base: 'text-base',
      small: 'text-sm',
    }
  },
  shadows: {
    sm: 'shadow-sm',
    DEFAULT: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },
  transitions: {
    DEFAULT: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500',
  },
  effects: {
    hover: {
      scale: 'hover:scale-105',
      brightness: 'hover:brightness-110',
    }
  }
};
