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

    const img = screen.getByAltText("juan jose navarro perea");
    const linkedInLink = screen.getByRole("link", { name: "linkedIn" });
    const contactMeLink = screen.getByRole("link", { name: "contactMe" });

    expect(img).toHaveAttribute("src", "/juanjose.avif");
    expect(img).toHaveAttribute("loading", "eager");
    expect(linkedInLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/juan-jose-navarro-perea/",
    );
    expect(contactMeLink).toHaveAttribute(
      "href",
      "mailto:juanjosenavarroperea@gmail.com",
    );
    expect(screen.getByText("hero.title")).toBeInTheDocument();
    expect(screen.getByText("hero.description")).toBeInTheDocument();
  });
});
