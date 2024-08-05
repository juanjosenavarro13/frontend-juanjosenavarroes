import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LinkButton } from "./link-button";

describe("link button", () => {
  it("should render with props", () => {
    render(
      <LinkButton href="http://www.google.es">
        <p>children</p>
      </LinkButton>,
    );
    const link = document.querySelector("a");
    expect(link).toHaveProperty("href", "http://www.google.es/");
    expect(link).toHaveTextContent("children");
  });
});
