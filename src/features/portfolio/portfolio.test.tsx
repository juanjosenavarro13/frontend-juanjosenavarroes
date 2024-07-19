import { renderWithWrapper } from "@/core/utils/test-utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portfolio } from "./portfolio";

describe("portfolio", () => {
  it("should render", () => {
    renderWithWrapper(<Portfolio />);
    expect(screen.getByText("laboralExperience")).toBeInTheDocument();
    expect(screen.getByText("projects")).toBeInTheDocument();
    expect(screen.getByText("aboutMe")).toBeInTheDocument();
  });
});
