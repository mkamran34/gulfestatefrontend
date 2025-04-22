import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import enCommon from './translations/en/common.json';
import frCommon from './translations/fr/common.json';

const resources = {
  en: {
    common: enCommon
  },
  fr: {
    common: frCommon
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['navigator', 'querystring', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false
    },
    ns: ['common'],
    defaultNS: 'common'
  });

export default i18n;
