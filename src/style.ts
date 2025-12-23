import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import colors from './constants/color';
import fontSize from './constants/fontSize';

const textFontSize = Object.keys(fontSize || {}).map((value) => `text-${value}`);

const textColor = Object.keys(colors || {}).map((value) => `text-${value}`);

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': textFontSize,
      'text-color': textColor,
    },
  },
});

export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
