import { renderWithWrapper } from "@/core/utils/test-utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutMe } from "./about-me";

describe("about me", () => {
  it("should render", () => {
    renderWithWrapper(<AboutMe />);

    expect(screen.getByText("aboutMeSection.description")).toBeInTheDocument();
    expect(document.querySelector("img")).toBeInTheDocument();
    expect(document.querySelector("img")?.getAttribute("alt")).toBe(
      "Juan José Navarro Perea",
    );
  });
});
