import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GeneralLoading } from "./general-loading";

describe("loading home", () => {
  it("render", () => {
    const { getByTestId } = render(<GeneralLoading />);
    expect(getByTestId("generalLoading")).toBeInTheDocument();
  });
});
