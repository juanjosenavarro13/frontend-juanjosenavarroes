import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NotFoundPage from "./not-found-page";
import { BrowserRouter } from "react-router-dom";
describe("not found page", () => {
  it("show 404 text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>,
    );
    expect(getByText("404")).toBeInTheDocument();
    expect(getByText("Página principal").getAttribute("href")).toBe("/");
  });
});
