import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Login from "./login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

describe("login", () => {
  it("user login valid", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </QueryClientProvider>,
    );
  });
});
