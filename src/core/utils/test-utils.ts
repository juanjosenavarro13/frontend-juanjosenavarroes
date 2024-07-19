import { render } from "@testing-library/react";
import { TestWrapper } from "./test-wrapper";

export function renderWithWrapper(ui: React.ReactElement, options = {}) {
  return render(ui, { wrapper: TestWrapper, ...options });
}
