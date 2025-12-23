import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';
import tailwindTheme from '../tailwind.config';

const fontSize = Object.keys(tailwindTheme.theme?.extend?.fontSize || {}).map(
  (value) => `text-${value}`
);

const textColor = Object.keys(tailwindTheme.theme?.extend?.colors || {}).map(
  (value) => `text-${value}`
);

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': fontSize,
      'text-color': textColor,
    },
  },
});

export default function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
