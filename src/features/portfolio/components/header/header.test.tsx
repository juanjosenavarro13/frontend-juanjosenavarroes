import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./header";
import { TestWrapper } from "@/core/utils";

describe("header", () => {
  it("should render", () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>,
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-theme")).toBeInTheDocument();
    expect(screen.getByText("header.experience")).toBeInTheDocument();
    expect(screen.getByText("header.projects")).toBeInTheDocument();
    expect(screen.getByText("header.aboutMe")).toBeInTheDocument();
  });
});
