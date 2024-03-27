import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as useStoreTheme from "../../stores/";
import { ThemeToggle } from "./theme-toggle";

describe("toggle theme", () => {
  it("render default moonIcon", () => {
    vi.spyOn(useStoreTheme, "useStoreTheme").mockReturnValue({
      theme: "light",
      toggleTheme: vi.fn(),
    });
    const { getByTestId } = render(<ThemeToggle />);
    expect(getByTestId("moonIcon")).toBeInTheDocument();
  });

  it("when user click and change to dark mode", async () => {
    const mockToggleTheme = vi.fn();
    vi.spyOn(useStoreTheme, "useStoreTheme").mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });
    const { getByTestId } = render(<ThemeToggle />);

    fireEvent.click(getByTestId("buttonChangeTheme"));
    expect(mockToggleTheme).toBeCalledTimes(1);
  });

  it("render sunIcon on darkmode", () => {
    vi.spyOn(useStoreTheme, "useStoreTheme").mockReturnValue({
      theme: "dark",
      toggleTheme: vi.fn(),
    });
    const { getByTestId } = render(<ThemeToggle />);
    expect(getByTestId("sunIcon")).toBeInTheDocument();
  });
});
