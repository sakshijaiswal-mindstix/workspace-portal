import React from "react";
import SearchAppBar from "../../components/NavBar/NavBar";
import ProductBox from "@workspace/ProductBox";
import { FormModal } from "src/components/FormModal/FormModal";
import styles from "./Dashboard.module.scss";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { openModal, closeModal } from "../../state/slices/productSlice"
import { increment, decrement } from "src/state/slices/counterSlice";
import { useProducts } from "src/hooks/useProducts";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();
  const increaseCount = useSelector((state: RootState) => state.counter.count)
  const isOpen = useAppSelector((state) => state.products.isModalOpen);
  const { data, isLoading, error } = useProducts(); // call all hooks first

  // Early returns for UI
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching</p>;

  return (
    <div className={styles.homeWrapper}>
      <SearchAppBar />
      <div className={styles.content}>
        {data?.map((item) => (
          <ProductBox
            key={item.id}
            //image={item.image}
            title={item.title}
            price={item.price}
            onAddToCart={() => dispatch(openModal())}
          />
        ))}
      </div>
      {/* <button onClick={() => dispatch(increment())}>+</button>
      <div>{increaseCount}</div> */}
      <FormModal isOpen={isOpen} onClose={() => dispatch(closeModal())} />
    </div>
  );
};

export default Homepage;