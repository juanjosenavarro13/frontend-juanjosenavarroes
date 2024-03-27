import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { HomePageLoading } from "./loading";

describe("loading home", () => {
  it("render", () => {
    render(<HomePageLoading />);
  });
});
