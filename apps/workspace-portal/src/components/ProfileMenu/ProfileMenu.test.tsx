import { render, screen, fireEvent } from "@testing-library/react";
import ProfileMenu from "./ProfileMenu";

describe("ProfileMenu", () => {
  it("opens menu on avatar click", () => {
    render(<ProfileMenu />);

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("calls settings and logout callbacks", () => {
    const onSettingClick = vi.fn();
    const onLogoutClick = vi.fn();

    render(
      <ProfileMenu
            onSettingClick={onSettingClick}
            onLogoutClick={onLogoutClick} username={""} avatarLetter={""}      />
    );

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Settings"));
    expect(onSettingClick).toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Logout"));
    expect(onLogoutClick).toHaveBeenCalled();
  });
});
