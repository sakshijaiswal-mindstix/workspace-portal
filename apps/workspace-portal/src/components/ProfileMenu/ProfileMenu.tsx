import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import styles from "./Profile.module.scss";
import type { ProfileMenuProps } from "./types";

const ProfileMenu: React.FC<ProfileMenuProps> = ({
 // username = "User",
  avatarLetter = "U",
  onSettingClick,
  onLogoutClick,
}) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <div className={styles.container}>
      <IconButton onClick={handleOpen} className={styles.avatarButton}>
        <Avatar className={styles.avatar}>{avatarLetter}</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        className={styles.menu}
      >
        <MenuItem
          onClick={() => {
            onSettingClick?.();
            handleClose();
          }}
        >
          Settings
        </MenuItem>

        <Divider />

        <MenuItem
          onClick={() => {
            onLogoutClick?.();
            handleClose();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
