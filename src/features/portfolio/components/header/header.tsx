import { NAVITEMS } from "../../constants/header";
import { ThemeToggle } from "../theme-toggle";
import styles from "./header.module.css";

export function Header() {
  return (
    <header
      data-testid="header"
      className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
    >
      <nav
        className={`${styles.nav} flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center`}
      >
        {NAVITEMS.map((link) => (
          <a
            key={link.title}
            className="relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-400"
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
