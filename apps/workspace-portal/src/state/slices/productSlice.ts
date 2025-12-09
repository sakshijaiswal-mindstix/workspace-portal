import { createSlice } from "@reduxjs/toolkit";
import { mockProducts } from "src/services/ProductData";

type Product = (typeof mockProducts)[number];

type ReadonlyProduct = Readonly<Product>;

type ProductMap = Record<Product["id"], Product>;

interface ProductState {
  items: ReadonlyArray<ReadonlyProduct>;
  isModalOpen: boolean;
  productMap: ProductMap;
}

const initialState: ProductState = {
  items: mockProducts as ReadonlyArray<ReadonlyProduct>,
  isModalOpen: false,
  productMap: mockProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {} as ProductMap),
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = productsSlice.actions;
export default productsSlice.reducer;
