import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./footer";

describe("footer", () => {
  it("render footer", () => {
    const { getByText, getByTestId } = render(
      <Footer
        info={{
          name: "Juan José",
          firstSurname: "Navarro",
          fullName: "Juan José Navarro Perea",
          secondSurname: "Perea",
        }}
        links={{ email: "juanjosenavarroperea@gmail.com", linkedin: "" }}
      />,
    );
    expect(getByTestId("footer_url").getAttribute("href")).toBe(
      "https://www.juanjosenavarro.es/",
    );
    expect(getByText("contact").getAttribute("href")).toBe(
      "mailto:juanjosenavarroperea@gmail.com",
    );
  });
});
