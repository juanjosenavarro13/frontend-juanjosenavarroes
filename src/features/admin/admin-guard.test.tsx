import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import AdminGuard from "./admin-guard";
import { BrowserRouter } from "react-router-dom";
import * as useStoreUser from "../auth/store/user/store-user";

describe("Admin Guard", () => {
  it("user auth", () => {
    vi.spyOn(useStoreUser, "useStoreUser").mockReturnValue({
      user: { id: 1, email: "email@email.es" },
    });
    render(
      <BrowserRouter>
        <AdminGuard />
      </BrowserRouter>,
    );
  });

  it("no user", () => {
    vi.spyOn(useStoreUser, "useStoreUser").mockReturnValue({ user: undefined });
    render(
      <BrowserRouter>
        <AdminGuard />
      </BrowserRouter>,
    );
  });
});
