import { renderWithWrapper } from "@/core/utils/test-utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Portfolio } from "./portfolio";

describe("portfolio", () => {
  it("should render", () => {
    renderWithWrapper(<Portfolio />);
    expect(screen.getByTestId("portfolio")).toBeInTheDocument();
  });
});
