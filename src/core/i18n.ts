import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const i18nInstance = i18n
  .createInstance()
  .use(Backend)
  .use(initReactI18next)
  .init({
    ns: ["portfolio"],
    lng: "en",
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
  });
