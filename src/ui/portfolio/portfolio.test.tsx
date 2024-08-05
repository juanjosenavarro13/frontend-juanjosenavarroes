import { renderWithWrapper } from "@/core/utils/test-utils";
import { describe, expect, it } from "vitest";
import { Portfolio } from "./portfolio";

describe("portfolio", () => {
  it("should render", () => {
    renderWithWrapper(<Portfolio />);
    expect(true).toBe(true);
  });
});
