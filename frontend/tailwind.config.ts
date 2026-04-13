import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2, 6, 23, 0.08)'
      }
    },
  },
  plugins: [],
};

export default config;
