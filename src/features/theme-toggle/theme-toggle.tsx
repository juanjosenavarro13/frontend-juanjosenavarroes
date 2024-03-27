import { useStoreTheme } from "../../stores";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useStoreTheme();
  return (
    <div className="relative ml-1 mr-1">
      <button
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
