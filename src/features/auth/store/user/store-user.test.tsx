import { act, renderHook } from "@testing-library/react";
import { useStoreUser } from "./store-user";
import { describe, expect, it } from "vitest";

describe("store user", () => {
  it("useStoreUser should set and get user correctly", () => {
    const { result } = renderHook(() => useStoreUser());

    expect(result.current.user).toBeUndefined();

    const user = { id: 1, email: "example@example.com" };

    act(() => {
      result.current.setUser(user);
    });

    expect(result.current.user).toEqual(user);
  });
});
