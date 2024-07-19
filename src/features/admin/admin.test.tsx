import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Admin } from "./admin";

describe("AdminGuard", () => {
  it("render", () => {
    const { getByTestId } = render(<Admin />);

    expect(getByTestId("adminPage")).toBeInTheDocument();
  });
});
