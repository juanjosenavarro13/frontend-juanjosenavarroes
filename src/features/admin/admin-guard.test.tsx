import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { AdminGuard } from "./admin-guard";
import { BrowserRouter } from "react-router-dom";
import * as checkAdmin from "./utils/checkAdmin";

describe("AdminGuard", () => {
  it("user admin", () => {
    vi.spyOn(checkAdmin, "checkAdmin").mockReturnValue(true);
    render(
      <BrowserRouter>
        <AdminGuard />
      </BrowserRouter>,
    );
  });

  it("normal user", () => {
    vi.spyOn(checkAdmin, "checkAdmin").mockReturnValue(false);
    render(
      <BrowserRouter>
        <AdminGuard />
      </BrowserRouter>,
    );
  });
});
