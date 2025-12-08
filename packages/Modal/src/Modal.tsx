import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import styles from "./Modal.module.scss";
import type { BasicModalProps } from "./types";

export default function WorkSpaceModal({
  open,
  handleClose,
  children,
}: BasicModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.modalBox}>
        <IconButton
          onClick={handleClose}
          aria-label="close"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            left: "auto",
            zIndex: 10,
          }}
        >
          ✕
        </IconButton>

        <Box className={styles.modalContent}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
}
