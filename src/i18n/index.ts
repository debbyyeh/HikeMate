import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';
import { getOptions } from './setting';

i18n
  .use(initReactI18next)
  .use(resourcesToBackend((lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`)))
  .init(getOptions('en', 'translation'));

export default i18n;

export function setLanguage(lang: string) {
  i18n.changeLanguage(lang);
}
