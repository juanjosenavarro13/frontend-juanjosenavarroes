import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import HomePage from "./home-page";
describe("home page", () => {
  it("render", () => {
    render(<HomePage />);
  });
});
