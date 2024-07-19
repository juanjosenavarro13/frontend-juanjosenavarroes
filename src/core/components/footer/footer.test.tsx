import { renderWithWrapper } from "@/core/utils/test-utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";

describe("footer", () => {
  it("should render info", () => {
    renderWithWrapper(<Footer />);
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
