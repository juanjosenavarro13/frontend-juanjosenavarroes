import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Blog from "./blog";
import { TestWrapper } from "@/core/utils";

describe("blog", () => {
  it("render blog", () => {
    render(
      <TestWrapper>
        <Blog />
      </TestWrapper>,
    );
  });
});
