import { useTranslation } from "react-i18next";
import styles from "./select-language.module.css";

export function SelectLanguage() {
  const { i18n } = useTranslation();

  return (
    <select
      aria-label="Language"
      data-testid="language-select"
      className={styles.select}
      defaultValue={i18n.language}
      onChange={(event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
      }}
    >
      <option disabled value={i18n.language}>
        {i18n.language.toUpperCase()}
      </option>
      <option value="es">ES</option>
      <option value="en">EN</option>
    </select>
  );
}
