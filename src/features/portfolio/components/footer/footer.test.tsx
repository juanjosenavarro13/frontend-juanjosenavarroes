import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";

describe("footer", () => {
  it("render footer", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Juan José").getAttribute("href")).toBe(
      "https://www.juanjosenavarro.es/",
    );
    expect(getByText("contact").getAttribute("href")).toBe(
      "mailto:juanjosenavarroperea@gmail.com",
    );
  });
});
