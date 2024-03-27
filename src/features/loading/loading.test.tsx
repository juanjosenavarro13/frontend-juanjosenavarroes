import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { GeneralLoading } from "./loading";

describe("loading home", () => {
  it("render", () => {
    render(<GeneralLoading />);
  });
});
