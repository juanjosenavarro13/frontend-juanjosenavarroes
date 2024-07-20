import { useTranslation } from "react-i18next";

export function NoArticles() {
  const { t } = useTranslation();
  return (
    <h1 className="text-center text-4xl font-bold dark:text-white">
      {t("notAvailable")}
    </h1>
  );
}
