import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Background } from "./background";

describe("background", () => {
  it("should render", () => {
    render(<Background />);
    expect(screen.getByTestId("background")).toBeInTheDocument();
  });
});
