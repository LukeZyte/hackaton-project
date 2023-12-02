import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationPL from "./locales/pl/translation.json";
import translationEN from "./locales/en/translation.json";
import commonPL from "./locales/pl/common.json";
import commonEN from "./locales/en/common.json";

const resources = {
  en: {
    translation: translationEN,
    common: commonEN,
  },
  pl: {
    translation: translationPL,
    common: commonPL,
  },
};

i18next.use(initReactI18next).use(LanguageDetector).init({
  fallbackLng: "pl",
  resources,
});
