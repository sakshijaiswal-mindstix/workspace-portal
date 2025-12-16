type Variant = "primary" | "secondary" | "delete";

export interface ButtonProps {
  label: string;
  variant: Variant;
  onClick: () => void;
};