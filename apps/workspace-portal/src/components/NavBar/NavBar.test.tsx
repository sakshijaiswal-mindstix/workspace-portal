import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "./NavBar";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (_key: string, fallback: string) => fallback,
  }),
}));

describe("NavBar", () => {
  it("renders title", () => {
    render(<NavBar onMenuClick={vi.fn()} />);

    expect(
      screen.getByText("Workspace Portal")
    ).toBeInTheDocument();
  });

  it("calls menu click handler", () => {
  const onMenuClick = vi.fn();
  render(<NavBar onMenuClick={onMenuClick} />);

  fireEvent.click(screen.getByLabelText(/open menu/i));
  expect(onMenuClick).toHaveBeenCalledTimes(1);
});

});
