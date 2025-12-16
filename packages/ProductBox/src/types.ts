export interface ProductBoxProps {
  readonly image: string;
  title: string;
  price: string | number;
  onAddToCart: () => void;
}
