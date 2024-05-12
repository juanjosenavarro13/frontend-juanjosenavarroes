import { TestWrapper } from "@/core/utils";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "./projects";

describe("projects section", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <Projects />
      </TestWrapper>,
    );
    expect(document.querySelector("article")?.textContent).toContain("preview");
    expect(document.querySelector("article")?.textContent).toContain("code");
    expect(screen.getByText("Pokeapi")).toBeInTheDocument();
    expect(screen.getByText("Gesimar")).toBeInTheDocument();
    expect(screen.getByText("Pizzeria belsay")).toBeInTheDocument();
  });
});
