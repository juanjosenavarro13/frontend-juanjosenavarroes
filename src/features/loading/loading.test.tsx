import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Loading } from "./loading";

describe("loading home", () => {
  it("render", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("loading")).toBeInTheDocument();
  });
});
