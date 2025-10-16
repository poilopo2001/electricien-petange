/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003da5',
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c1ff',
          300: '#66a3ff',
          400: '#3384ff',
          500: '#003da5',
          600: '#003189',
          700: '#00256d',
          800: '#001951',
          900: '#000d35',
        },
        secondary: {
          DEFAULT: '#ef3340',
          50: '#ffebec',
          100: '#ffd6d9',
          200: '#ffadb3',
          300: '#ff858d',
          400: '#ff5c67',
          500: '#ef3340',
          600: '#d12933',
          700: '#b31f26',
          800: '#95151a',
          900: '#770b0d',
        },
        accent: {
          DEFAULT: '#00a3e0',
          50: '#e6f7fd',
          100: '#cceffb',
          200: '#99dff7',
          300: '#66cff3',
          400: '#33bfef',
          500: '#00a3e0',
          600: '#0082b3',
          700: '#006286',
          800: '#004159',
          900: '#00212c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1', fontWeight: '800' }],
        'h2': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'body-large': ['1.125rem', { lineHeight: '1.75' }],
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'accent': '0 10px 40px -10px rgba(0, 163, 224, 0.4)',
        'secondary': '0 10px 40px -10px rgba(239, 51, 64, 0.4)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 163, 224, 0.4)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 163, 224, 0.6)',
            transform: 'scale(1.05)',
          },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, rgba(0, 61, 165, 0.95) 0%, rgba(0, 49, 137, 0.9) 100%)',
        'gradient-accent': 'linear-gradient(135deg, rgba(0, 163, 224, 0.95) 0%, rgba(0, 130, 179, 0.9) 100%)',
        'gradient-primary': 'linear-gradient(to bottom, #003da5, #003189)',
        'gradient-secondary': 'linear-gradient(135deg, rgba(239, 51, 64, 0.95) 0%, rgba(209, 41, 51, 0.9) 100%)',
      },
    },
  },
  plugins: [],
}
