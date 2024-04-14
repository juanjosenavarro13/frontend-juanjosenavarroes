import { useTranslation } from "react-i18next";

export default function Admin() {
  const { i18n } = useTranslation();
  return <div data-testid="adminPage">admin {i18n.language}</div>;
}
