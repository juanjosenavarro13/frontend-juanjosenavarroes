import { renderWithWrapper } from "@/core/utils/test-utils";
import { describe, it } from "vitest";
import { Blog } from "./blog";

describe("blog", () => {
  it("render blog", () => {
    renderWithWrapper(<Blog />);
  });
});
