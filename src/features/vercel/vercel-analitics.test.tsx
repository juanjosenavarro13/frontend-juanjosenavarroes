import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { VercelAnalitics } from "./vercel-analitics";

describe("vercel", () => {
  it("render", () => {
    render(<VercelAnalitics />);
  });
});
