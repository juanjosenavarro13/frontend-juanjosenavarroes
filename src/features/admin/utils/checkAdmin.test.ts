import { describe, expect, it } from "vitest";
import { checkAdmin } from "./checkAdmin";

describe("check admin", () => {
  it("is admin", () => {
    expect(checkAdmin()).toBe(true);
  });
});
