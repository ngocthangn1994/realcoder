import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edfcf4',
          100: '#d5f9e3',
          500: '#17a561',
          700: '#0d6a3d'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(2, 6, 23, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
