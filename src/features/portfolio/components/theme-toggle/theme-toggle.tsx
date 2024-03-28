import { useStoreTheme } from "../../store";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useStoreTheme();
  return (
    <div className="relative ml-1 mr-1">
      <button
        aria-label="cambiar tema"
        data-testid="buttonChangeTheme"
        className="border-none flex hover:scale-125 transition"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <SunIcon className="theme-toggle-icon size-5 transition-all" />
        ) : (
          <MoonIcon className="theme-toggle-icon size-5 transition-all" />
        )}
      </button>
    </div>
  );
}
