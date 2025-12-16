import { render, screen } from "@testing-library/react";
import { FormModal } from "./FormModal";

vi.mock("@workspace/Modal", () => ({
  default: ({ open, children }: any) =>
    open ? <div data-testid="workspace-modal">{children}</div> : null,
}));

vi.mock("@workspace/button", () => ({
  default: ({ label }: any) => <button>{label}</button>,
}));

describe("FormModal", () => {
  it("renders checkout form and button when open", () => {
    render(<FormModal isOpen={true} onClose={vi.fn()} />);

    expect(screen.getByTestId("workspace-modal")).toBeInTheDocument();
    expect(screen.getByText(/proceed to payment/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  it("does not render modal when closed", () => {
    render(<FormModal isOpen={false} onClose={vi.fn()} />);

    expect(
      screen.queryByTestId("workspace-modal")
    ).not.toBeInTheDocument();
  });
});
