import { useTranslation } from "react-i18next";
import styles from "./select-language.module.css";

export function SelectLanguage() {
  const { i18n } = useTranslation();

  return (
    <select
      data-testid="language-select"
      className={styles.select}
      onChange={(event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
      }}
    >
      <option aria-label="es" value="es">
        ES
      </option>
      <option aria-label="en" value="en">
        EN
      </option>
    </select>
  );
}
