/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';
import colors from './src/constants/color';

const tailwindConfig: Config = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

export default tailwindConfig;
