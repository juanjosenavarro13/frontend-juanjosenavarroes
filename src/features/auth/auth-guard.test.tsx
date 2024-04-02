import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { BrowserRouter } from "react-router-dom";
import AuthGuard from "./auth-guard";
import * as useStoreUser from "./store/user/store-user";

describe("auth Guard", () => {
  it("user", () => {
    vi.spyOn(useStoreUser, "useStoreUser").mockReturnValue({
      user: { username: "usuario1", email: "usuario1@example.com" },
    });
    render(
      <BrowserRouter>
        <AuthGuard />
      </BrowserRouter>,
    );
  });

  it("no auth", () => {
    vi.spyOn(useStoreUser, "useStoreUser").mockReturnValue({
      user: undefined,
    });
    render(
      <BrowserRouter>
        <AuthGuard />
      </BrowserRouter>,
    );
  });
});
