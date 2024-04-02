import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "./login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

describe("login", () => {
  it("render login", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>,
    );
  });
});
