import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Portfolio from "./portfolio";
describe("portfolio", () => {
  it("show header", () => {
    const { getByTestId } = render(<Portfolio />);
    expect(getByTestId("header")).toBeInTheDocument();
  });
});
