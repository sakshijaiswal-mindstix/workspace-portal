import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

describe("CheckoutForm", () => {
  it("renders all input fields", () => {
    render(<CheckoutForm />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mobile number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/flat \/ house no/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/area \/ street/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pincode/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  it("updates input value when user types", () => {
    render(<CheckoutForm />);

    const fullNameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;

    fireEvent.change(fullNameInput, {
      target: { value: "Sakshi Jaiswal" }
    });

    expect(fullNameInput.value).toBe("Sakshi Jaiswal");
  });
});
