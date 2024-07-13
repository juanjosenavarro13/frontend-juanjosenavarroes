import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";
import { TestWrapper } from "@/core/utils";

describe("footer", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>,
    );
  });

  it("should render info", () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>,
    );
    expect(screen.getByText(/Juan José/i)).toHaveAttribute(
      "href",
      "https://www.juanjosenavarro.es/",
    );
    expect(screen.getByText(/footer.contact/i)).toHaveAttribute(
      "href",
      "mailto:juanjosenavarroperea@gmail.com",
    );
  });
});
