import { TestWrapper } from "@/core/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portfolio } from "./portfolio";

describe("portfolio", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <Portfolio />
      </TestWrapper>,
    );
    expect(screen.getByText("laboralExperience")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("aboutMe")).toBeInTheDocument();
  });
});
