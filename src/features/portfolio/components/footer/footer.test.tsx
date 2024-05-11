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
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("render info", () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>,
    );
    expect(screen.getByText("footer.contact")).toBeInTheDocument();
    expect(screen.getByText("Juan José")).toBeInTheDocument();
    expect(screen.getByTestId("footer_url").getAttribute("href")).toBe(
      "https://www.juanjosenavarro.es/",
    );
    expect(screen.getByTestId("footer_contact").getAttribute("href")).toBe(
      "mailto:juanjosenavarroperea@gmail.com",
    );
  });
});
