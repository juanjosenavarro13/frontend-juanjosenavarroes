import { TestWrapper } from "@/core/utils/test-wrapper";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Login from "./login";

vi.mock("axios");

describe("login", () => {
  it("user login valid", async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Login />
      </TestWrapper>,
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
