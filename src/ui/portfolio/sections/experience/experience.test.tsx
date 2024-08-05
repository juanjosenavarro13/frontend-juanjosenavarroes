import { renderWithWrapper } from "@/core/utils/test-utils";
import { describe, expect, it } from "vitest";
import { Experience } from "./experience";

describe("experience", () => {
  it("should render", () => {
    renderWithWrapper(<Experience />);
    expect(document.querySelector("ol")).toBeInTheDocument();
  });
  it("should render with class reveal", () => {
    renderWithWrapper(<Experience />);

    const list = document.querySelectorAll("li");

    expect(list[0]).not.toHaveClass("reveal");

    for (let i = 1; i < list.length; i++) {
      expect(list[i]).toHaveClass("reveal");
    }
  });
});
