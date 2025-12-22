export type Locale = 'en' | 'zh-Hant';
export type LocaleItem = {
  label: string;
  short: string;
  value: Locale;
};
export const fallbackLng = 'zh-Hant';
export const languages = [fallbackLng, 'en'];
export const localeCookieName = 'locale';
export const defaultNS = 'translation';
export const locales = [
  {
    label: '繁體中文',
    short: '繁',
    value: 'zh-Hant',
  },
  {
    label: 'English',
    short: 'EN',
    value: 'en',
  },
] as LocaleItem[];

export function getOptions(lng?: string, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    preload: languages,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    fallbackLng: fallbackLng,
    ns,
  };
}
