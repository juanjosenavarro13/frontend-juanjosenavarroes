import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as useLogin from "./hooks/use-login/use-login";
import Login from "./login";

describe("login", () => {
  it("user login valid", async () => {
    vi.spyOn(useLogin, "useLogin").mockReturnValue({
      handleSubmit: vi.fn(),
      isValid: true,
      mutation: { isPending: false } as never,
      onSubmit: vi.fn(),
      register: vi.fn(),
    });
    render(<Login />);

    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByTestId("btnSubmitLogin"));
    await waitFor(() =>
      expect(screen.getByText("Iniciar sesión")).toBeInTheDocument(),
    );
  });

  it("user login loading fetch", async () => {
    vi.spyOn(useLogin, "useLogin").mockReturnValue({
      handleSubmit: vi.fn(),
      isValid: true,
      mutation: { isPending: true } as never,
      onSubmit: vi.fn(),
      register: vi.fn(),
    });
    render(<Login />);

    await waitFor(() =>
      expect(screen.getByText("Cargando...")).toBeInTheDocument(),
    );
  });
});
