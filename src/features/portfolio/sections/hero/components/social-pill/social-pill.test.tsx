import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SocialPill } from "./social-pill";

describe("social pill", () => {
  it("should render text", () => {
    render(<SocialPill href="link">childrentest</SocialPill>);
    expect(document.querySelector("a")).toHaveAttribute("href", "link");
    expect(document.querySelector("a")).toHaveTextContent("childrentest");
  });
  it("should render JSX.ELEMENT", () => {
    render(
      <SocialPill href="link">
        <p>childrentest</p>
      </SocialPill>,
    );
    expect(document.querySelector("a")).toHaveAttribute("href", "link");
    expect(document.querySelector("a")).toHaveTextContent("childrentest");
  });
});
