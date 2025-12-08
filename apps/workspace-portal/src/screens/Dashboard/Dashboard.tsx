import React, { useState } from "react";
import SearchAppBar from "../../components/NavBar/src/NavBar";
import ProductBox from "@workspace/ProductBox";
import { FormModal } from "src/components/FormModal/src/FormModal";

import styles from "./Dashboard.module.scss";
import { mockProducts } from "src/services/ProductData";

const Homepage: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className={styles.homeWrapper}>
      <SearchAppBar />

      <div className={styles.content}>
        {mockProducts.map((items) => (
          <ProductBox
            key={items.id}
            image={items.image}
            title={items.title}
            price={items.price}
            onAddToCart={handleOpenModal}
          />
        ))}
      </div>
      <FormModal isOpen={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Homepage;
