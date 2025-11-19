import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import commonEn from './locales/en/common.json';
import politicsEn from './locales/en/politics.json';
import historyEn from './locales/en/history.json';

import commonZh from './locales/zh/common.json';
import politicsZh from './locales/zh/politics.json';
import historyZh from './locales/zh/history.json';

import commonJp from './locales/jp/common.json';
import politicsJp from './locales/jp/politics.json';
import historyJp from './locales/jp/history.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: commonEn,
                politics: politicsEn,
                history: historyEn
            },
            zh: {
                common: commonZh,
                politics: politicsZh,
                history: historyZh
            },
            jp: {
                common: commonJp,
                politics: politicsJp,
                history: historyJp
            }
        },
        fallbackLng: 'zh',
        ns: ['common', 'politics', 'history'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
