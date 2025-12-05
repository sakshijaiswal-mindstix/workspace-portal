import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./types";
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <MuiButton
      variant="contained"
      className={`${styles.workspaceBtn} ${styles[`workspaceBtn${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
