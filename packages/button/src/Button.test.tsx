import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Button from "./Button";

describe("Button component - variants", () => {
  const variants = [
    { variant: "primary", className: "workspaceBtnPrimary" },
    { variant: "secondary", className: "workspaceBtnSecondary" },
    { variant: "delete", className: "workspaceBtnDelete" },
  ] as const;

  variants.forEach(({ variant, className }) => {
    it(`applies correct class for ${variant} variant`, () => {
      render(<Button label={variant} variant={variant} />);

      const btn = screen.getByText(variant);
      expect(btn.className).toContain(className);
    });
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
