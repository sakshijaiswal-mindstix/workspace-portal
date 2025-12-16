import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SettingsForm from "./SettingsForm";

const mockUpdateSettings = vi.fn();

vi.mock("src/state/contexts/SettingsContext", () => ({
  useSettings: () => ({
    theme: "light",
    language: "en",
    updateSettings: mockUpdateSettings,
  }),
}));

describe("SettingsForm", () => {
  it("renders inputs", () => {
    render(<SettingsForm />);

    expect(screen.getByLabelText(/language/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/theme/i)).toBeInTheDocument();
  });

  it("updates settings on save via ref", () => {
    const ref = React.createRef<any>();
    render(<SettingsForm ref={ref} />);

    fireEvent.change(screen.getByLabelText(/language/i), {
      target: { value: "fr" },
    });

    fireEvent.change(screen.getByLabelText(/theme/i), {
      target: { value: "dark" },
    });

    ref.current.save();

    expect(mockUpdateSettings).toHaveBeenCalledWith({
      theme: "dark",
      language: "fr",
    });
  });
});
