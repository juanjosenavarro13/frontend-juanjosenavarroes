import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Login from "./login";
const queryClient = new QueryClient();

vi.mock("axios");

describe("login", () => {
  it("user login valid", async () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>,
    );

    fireEvent.change(getByTestId("email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { value: "password123" },
    });

    fireEvent.click(getByTestId("btnSubmitLogin"));

    await waitFor(() =>
      expect(getByTestId("btnSubmitLogin")).toBeInTheDocument(),
    );
  });
});
