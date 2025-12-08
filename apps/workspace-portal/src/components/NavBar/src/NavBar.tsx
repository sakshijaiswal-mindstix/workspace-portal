import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import styles from "./NavBar.module.scss";
import ProfileMenu from "src/components/ProfileMenu/ProfileMenu";
import type { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({
  title = "Workspace Portal",
  onMenuClick,
}) => {
  return (
    <Box className={styles.navWrapper}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#2e2f30",
          color: "white",
          padding: "10px",
        }}
      >
        <Toolbar className={styles.toolbar}>
          <div className={styles.leftSection}>
            <IconButton
              edge="start"
              color="inherit"
              className={styles.menuButton}
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={styles.title}>
              {title}
            </Typography>
          </div>

          <div className={styles.rightSection}>
            <ProfileMenu />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
