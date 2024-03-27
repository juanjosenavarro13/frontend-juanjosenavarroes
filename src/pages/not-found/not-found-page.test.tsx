import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { NotFoundPage } from "./not-found-page";
describe("not found page", () => {
  it("render", () => {
    render(<NotFoundPage />);
  });
});
