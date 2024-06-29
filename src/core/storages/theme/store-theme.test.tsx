import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useStoreTheme } from "./store-theme";

describe("useStoreTheme", () => {
  it("should initialize theme", () => {
    const { result } = renderHook(() => useStoreTheme());
    expect(result.current.theme).toBe("light");
  });

  it("should doble change theme", () => {
    const { result } = renderHook(() => useStoreTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("dark");
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("light");
  });
});
