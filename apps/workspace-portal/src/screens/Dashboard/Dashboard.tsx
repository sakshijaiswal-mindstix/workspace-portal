import React from "react";
import SearchAppBar from "../../components/NavBar/NavBar";
import ProductBox from "@workspace/ProductBox";
import { FormModal } from "src/components/FormModal/FormModal";
import styles from "./Dashboard.module.scss";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { openModal, closeModal } from "../../state/slices/productSlice"
import { useProducts } from "src/hooks/useProducts";

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.products.isModalOpen);
  const { data, isLoading, error } = useProducts(); 
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching</p>;

  return (
    <div className={styles.homeWrapper}>
      <SearchAppBar />
      <div className={styles.content}>
        {data?.map((item) => (
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