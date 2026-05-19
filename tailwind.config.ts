import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#f9f6f1',
          100: '#f1ece4',
          200: '#e6ddcf',
          700: '#645847',
          900: '#1d1a17'
        },
        caramel: '#9a6a44',
        gold: '#c5a774'
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans TC"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif']
      },
      boxShadow: {
        soft: '0 20px 50px rgba(20,17,14,0.1)'
      }
    }
  },
  plugins: []
};

export default config;
