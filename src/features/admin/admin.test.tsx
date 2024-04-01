import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Admin from "./admin";

describe("AdminGuard", () => {
  it("render", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>,
    );

    expect(getByTestId("adminPage")).toBeInTheDocument();
  });
});
