import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

vi.mock("@tanstack/react-router", () => {
  return {
    useRouter: () => ({
      buildLocation: vi.fn(),
    }),
    Router: ({ children }: { children: JSX.Element }) => children,
    Link: ({ to, children }: { to: string; children: JSX.Element }) => (
      <a href={to}>{children}</a>
    ),
  };
});

afterEach(() => {
  cleanup();
});
