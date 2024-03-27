import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFoundPage from "./not-found-page";
describe("not found page", () => {
  it("render", () => {
    const { getByTestId } = render(<NotFoundPage />);
    expect(getByTestId("page404")).toBeInTheDocument();
  });
  it("404 text", () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText("404")).toBeInTheDocument();
  });
});
