import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutMe } from "./about-me";
import { TestWrapper } from "@/core/utils";

describe("about me", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <AboutMe />
      </TestWrapper>,
    );

    expect(screen.getByText("aboutMeSection.description")).toBeInTheDocument();
    expect(document.querySelector("img")).toBeInTheDocument();
    expect(document.querySelector("img")?.getAttribute("alt")).toBe(
      "Juan José Navarro Perea",
    );
  });
});
