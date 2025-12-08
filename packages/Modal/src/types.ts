import type { ReactNode } from "react";

export type BasicModalProps = {
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};
