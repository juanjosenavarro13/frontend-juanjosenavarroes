import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "./hero";
import { TestWrapper } from "@/core/utils";

describe("hero section", () => {
  it("should render with info", () => {
    render(
      <TestWrapper>
        <Hero />
      </TestWrapper>,
    );

    const links = document.querySelectorAll("a");

    expect(document.querySelector("img")).toHaveAttribute(
      "src",
      "/juanjose.avif",
    );
    expect(document.querySelector("img")).toHaveAttribute(
      "alt",
      "juan jose navarro perea",
    );
    expect(document.querySelector("img")).toHaveAttribute("loading", "eager");
    expect(links[0]).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/juan-jose-navarro-perea/",
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "mailto:juanjosenavarroperea@gmail.com",
    );
    expect(screen.getByText("hero.title")).toBeInTheDocument();
    expect(screen.getByText("hero.description")).toBeInTheDocument();
    expect(screen.getByText("contactMe")).toBeInTheDocument();
    expect(screen.getByText("linkedIn")).toBeInTheDocument();
  });
});
