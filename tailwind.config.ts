import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#bae0cb',
          300: '#8cc9a9',
          400: '#5aab82',
          500: '#3a9068',
          600: '#2a7453',
          700: '#235d44',
          800: '#1f4a38',
          900: '#1b3d2f',
          950: '#0d221a',
        },
        gold: {
          50: '#fdfbe9',
          100: '#fcf6c5',
          200: '#f9ea8e',
          300: '#f5d84d',
          400: '#f0c41e',
          500: '#e0ab11',
          600: '#c1850c',
          700: '#9a600d',
          800: '#7f4c13',
          900: '#6c3e16',
          950: '#3f2008',
        },
        neutral: {
          850: '#1f2024',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
