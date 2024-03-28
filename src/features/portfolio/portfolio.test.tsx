import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./portfolio";
describe("home page", () => {
  it("render", () => {
    render(<HomePage />);
  });
  it("show header", () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("header")).toBeInTheDocument();
  });
});
