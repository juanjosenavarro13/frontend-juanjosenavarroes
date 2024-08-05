import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LinkInLine } from "./link-in-line";

describe("link in line", () => {
  it("should render", () => {
    render(
      <LinkInLine href="link">
        <p>hola</p>
      </LinkInLine>,
    );

    expect(screen.getByText("hola")).toBeInTheDocument();
    expect(document.querySelector("a")).toHaveAttribute("href", "link");
  });
});
