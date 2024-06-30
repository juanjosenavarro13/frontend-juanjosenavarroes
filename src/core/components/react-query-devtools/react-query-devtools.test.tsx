import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import { ReactQueryDevTools } from "./react-query-devtools";

describe("react-query-devtools", () => {
  it("should render", () => {
    render(<ReactQueryDevTools />);
  });
});
