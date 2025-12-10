import React from "react";
import SearchAppBar from "../../components/NavBar/NavBar";
import ProductBox from "@workspace/ProductBox";
import { FormModal } from "src/components/FormModal/FormModal";
import styles from "./Dashboard.module.scss";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { openModal, closeModal } from "../../state/slices/productSlice"

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.items);
  const isOpen = useAppSelector((state) => state.products.isModalOpen);

  return (
    <div className={styles.homeWrapper}>
      <SearchAppBar />

      <div className={styles.content}>
        {products.map((item) => (
          <ProductBox
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            onAddToCart={() => dispatch(openModal())}
          />
        ))}
      </div>

      <FormModal isOpen={isOpen} onClose={() => dispatch(closeModal())} />
    </div>
  );
};

export default Homepage;
