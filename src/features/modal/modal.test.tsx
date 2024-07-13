import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./modal";
import { describe, expect, it, vi } from "vitest";

describe("modal", () => {
  it("renders modal open", async () => {
    const handleClose = vi.fn();
    render(
      <Modal open onClose={handleClose}>
        <p>hola</p>
      </Modal>,
    );

    expect(screen.getByText("hola")).toBeInTheDocument();

    await userEvent.click(screen.getByTestId("btnclose"));

    expect(handleClose).toBeCalled();
  });

  it("renders modal closed", () => {
    render(
      <Modal>
        <p>hola</p>
      </Modal>,
    );

    expect(screen.queryByText("hola")).not.toBeInTheDocument();
  });
});
