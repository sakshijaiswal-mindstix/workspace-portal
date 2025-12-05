import { Button as MuiButton } from "@mui/material";
import "./index.css";

type Variant = "primary" | "secondary" | "delete";

type Props = {
  label: string;
  variant?: Variant;
  onClick?: () => void;
};

export default function Button({ label, variant = "primary", onClick }: Props) {
  return (
    <MuiButton
      variant="contained"
      className={`workspace-btn workspace-btn--${variant}`}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
}
