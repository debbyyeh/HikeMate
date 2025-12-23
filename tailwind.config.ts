/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import colors from './src/constants/color';

const tailwindConfig: Config = {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      label01: '40px',
    },
    extend: {
      colors,
      borderRadius: {
        xs: '2px',
        base: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
