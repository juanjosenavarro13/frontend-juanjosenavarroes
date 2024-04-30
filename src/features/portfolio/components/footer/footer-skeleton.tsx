import { useTranslation } from "react-i18next";

export function FooterSkeleton() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation("portfolio");
  return (
    <footer className="container m-4 mx-auto mb-10 mt-16 flex w-full justify-center text-center opacity-80 md:max-w-2xl lg:max-w-4xl">
      <div className="mx-auto w-full max-w-screen-xl rounded-lg py-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-zinc-800/90 dark:text-zinc-200/90 sm:text-center">
          © {currentYear} . {t("footer.copyright")}
        </span>
        <ul className="mt-3 flex flex-wrap items-center justify-center text-sm font-medium dark:text-white/90 sm:mt-0">
          <li></li>
        </ul>
      </div>
    </footer>
  );
}
