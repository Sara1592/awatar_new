// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation JSONs
import en from "./public/locales/en/common.json";
import ar from "./public/locales/ar/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      ar: { common: ar },
    },
    lng: "en",          // default language
    fallbackLng: "en",  // fallback language
    interpolation: {
      escapeValue: false, // react already escapes
    },
  });

export default i18n;
