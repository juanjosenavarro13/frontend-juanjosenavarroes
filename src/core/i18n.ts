import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

export const i18nInstance = i18n
  .createInstance()
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });
