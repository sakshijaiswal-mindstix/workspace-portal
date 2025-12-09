import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button component", () => {
  it("renders the label text", () => {
    render(<Button label="Click Me" />);

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Button label="Primary" variant="primary" />);

    const btn = screen.getByText("Primary");
    expect(btn.className).toContain("workspaceBtnPrimary");
  });

  it("defaults to primary variant when not provided", () => {
    render(<Button label="Default" />);

    const btn = screen.getByText("Default");
    expect(btn.className).toContain("workspaceBtnPrimary");
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();

    render(<Button label="Press" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Press"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
