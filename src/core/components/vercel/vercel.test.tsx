import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { VercelAnalitics } from "./vercel";

describe("vercel", () => {
  it("render", () => {
    render(<VercelAnalitics />);
  });
});
