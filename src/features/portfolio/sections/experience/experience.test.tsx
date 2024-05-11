import { TestWrapper } from "@/core/utils";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experience } from "./experience";

describe("experience", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <Experience />
      </TestWrapper>,
    );
    expect(document.querySelector("ol")).toBeInTheDocument();
  });
  it("should render with class reveal", () => {
    render(
      <TestWrapper>
        <Experience />
      </TestWrapper>,
    );

    const list = document.querySelectorAll("li");

    expect(list[0]).not.toHaveClass("reveal");

    for (let i = 1; i < list.length; i++) {
      expect(list[i]).toHaveClass("reveal");
    }
  });
});
