export interface ProductBoxProps {
  image: string;
  title: string;
  price: string | number;
  onAddToCart: () => void;
}
