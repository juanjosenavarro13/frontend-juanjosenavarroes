import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionContainer } from "./section-container";

describe("section container", () => {
  it("should render", () => {
    render(
      <SectionContainer>
        <div data-testid="children">container</div>
      </SectionContainer>,
    );

    expect(screen.getByTestId("children")).toBeInTheDocument();
    expect(screen.getByText("container")).toBeInTheDocument();
  });

  it("render with props", () => {
    render(
      <SectionContainer
        className="classtest"
        id="idtest"
        icon={<p>icon</p>}
        title="titulo"
      >
        <div data-testid="children">container</div>
      </SectionContainer>,
    );

    expect(screen.getByTestId("children")).toBeInTheDocument();
    expect(screen.getByText("container")).toBeInTheDocument();
    expect(screen.getByText("icon")).toBeInTheDocument();
    expect(screen.getByText("titulo")).toBeInTheDocument();
    expect(document.querySelector("section")).toHaveClass("classtest");
    expect(document.querySelector("section")).toHaveAttribute("id", "idtest");
  });
});
