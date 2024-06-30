import { render, screen, waitFor } from "@testing-library/react";
import { RouteWithSuspense } from "./route-with-suspense";
import { describe, expect, it } from "vitest";
import { PortfolioLazy } from "@/features";
import { TestWrapper } from "@/core/utils";

describe("RouteWithSuspense component", () => {
  it("renders Lazy Component when loaded", async () => {
    render(
      <TestWrapper>
        <RouteWithSuspense element={PortfolioLazy} />
      </TestWrapper>,
    );

    expect(screen.getByTestId("generalLoading")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("laboralExperience")).toBeInTheDocument();
    });
  });
});
