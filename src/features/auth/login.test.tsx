import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "./login";

describe("login", () => {
  it("render login", () => {
    render(<Login />);
  });
});
