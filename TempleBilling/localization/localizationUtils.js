import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultLanguage } from '@/constants/constant';
import en from './language/en.json';
import tn from './language/tn.json';

const languageList = {
  en: {translation: en},
  tn: {translation: tn},
};

const initData = () => ({
  compatibilityJSON: 'v3',
  fallbackLng: defaultLanguage, 
  lng: defaultLanguage, 
  debug: false,
  resources: languageList,
  interpolation: {
    escapeValue: false, 
  },
});

i18n.use(initReactI18next).init(initData());

export default i18n;
