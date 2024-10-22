import { NAVITEMS } from "@/domain/portfolio/constants";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Background, SelectLanguage, ThemeToggle } from "./components";
import styles from "./header.module.css";

export function Header() {
  const { t } = useTranslation("portfolio");
  return (
    <>
      <header
        data-testid="header"
        className="fixed top-0 z-10 mx-auto mt-2 flex w-full flex-col items-center justify-center"
      >
        <nav
          className={`${styles.nav} flex items-center justify-center rounded-full px-3 text-sm font-medium text-gray-600 dark:text-gray-200`}
        >
          <SelectLanguage />
          {NAVITEMS.map((link) =>
            link.tag ? (
              <a
                key={link.title}
                className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
                aria-label={link.title}
                href={link.url}
              >
                {t(link.title)}
              </a>
            ) : (
              <Link
                key={link.title}
                to={link.url}
                className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
              >
                {t(link.title)}
              </Link>
            ),
          )}
          <ThemeToggle />
        </nav>
      </header>
      <Background />
    </>
  );
}
