import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../components/locales/en/translation.json';
import ko from "../components/locales/ko/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      en: { translation: en }
    },
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: { escapeValue: false }
  });

export default i18n;
