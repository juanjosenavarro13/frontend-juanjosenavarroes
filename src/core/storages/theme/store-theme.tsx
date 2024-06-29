import { create } from "zustand";

type ValidTheme = "light" | "dark";
type StoreTheme = {
  theme: ValidTheme;
  toggleTheme: () => void;
};

export const useStoreTheme = create<StoreTheme>((set) => ({
  theme: "light",
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
}));
