import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductBox from "./ProductBox";
import React from "react";

describe("ProductBox component", () => {
  const mockProps = {
    image: "https://via.placeholder.com/150",
    title: "Test Product",
    price: 499,
    onAddToCart: vi.fn(),
  };

  it("renders image, title and price", () => {
    render(<ProductBox {...mockProps} />);

    expect(screen.getByAltText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("₹499")).toBeInTheDocument();
  });

  it("renders Add to Cart button", () => {
    render(<ProductBox {...mockProps} />);

    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  it("calls onAddToCart when button is clicked", () => {
    render(<ProductBox {...mockProps} />);

    const btn = screen.getByText("Add to Cart");
    fireEvent.click(btn);

    expect(mockProps.onAddToCart).toHaveBeenCalledTimes(1);
  });
});
