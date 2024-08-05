import { renderWithWrapper } from "@/core/utils/test-utils";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./header";

describe("header", () => {
  it("should render", () => {
    renderWithWrapper(<Header />);

    expect(screen.getByTestId("toggle-theme")).toBeInTheDocument();
    expect(screen.getByText("header.experience")).toBeInTheDocument();
    expect(screen.getByText("header.aboutMe")).toBeInTheDocument();
  });
});
