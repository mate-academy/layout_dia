import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/common.json';
import ua from './locales/ua/common.json';
import { ConvertedToObjectType, TranslationJsonType } from './types';

const languageDetector = new LanguageDetector(undefined, { order: ['localStorage', 'myDetector'] });

languageDetector.addDetector({
  name: 'myDetector',

  lookup() {
    let found = [];

    if (typeof navigator !== 'undefined') {
      if (navigator.languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (let i = 0; i < navigator.languages.length; i++) {
          found.push(navigator.languages[i]);
        }
      }
      // @ts-ignore
      if (navigator.userLanguage) {
        // @ts-ignore
        found.push(navigator.userLanguage);
      }
      if (navigator.language) {
        found.push(navigator.language);
      }
    }

    return found.some(l => l && l.toLowerCase().includes('ua')) ? 'ua' : 'en';
  },
});

export const translationsJson = {
  en: {
    common: en,
  },
  ua: {
    common: ua,
  },
};

/**
 * This file is seperate from the './i18n.ts' simply to make the Hot Module Replacement work seamlessly.
 * Your components can import this file in 'messages.ts' files which would ruin the HMR if this isn't a separate module
 */
export const translations: ConvertedToObjectType<TranslationJsonType> = {} as any;

/*
 * Converts the static JSON file into an object where keys are identical
 * but values are strings concatenated according to syntax.
 * This is helpful when using the JSON file keys and still having the intellisense support
 * along with type-safety
 */
export const convertLanguageJsonToObject = (json: any, objToConvertTo = translations, current?: string) => {
  Object.keys(json).forEach(key => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof json[key] === 'object') {
      // @ts-ignore
      objToConvertTo[key] = {};
      // @ts-ignore
      convertLanguageJsonToObject(json[key], objToConvertTo[key], currentLookupKey);
    } else {
      // @ts-ignore
      objToConvertTo[key] = currentLookupKey;
    }
  });
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(languageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    // debug: process.env.NODE_ENV !== 'production',
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['b', 'br', 'strong', 'a', 'href'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
