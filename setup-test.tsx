import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

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
