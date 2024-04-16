import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    debug: true,
    load: "languageOnly",
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    lng: "zh",
    fallbackLng: "zh",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
