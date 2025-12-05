import React from "react";
import SearchAppBar from "../../components/NavBar/src/NavBar";
import ProductBox from "@workspace/ProductBox";
import styles from "./Dashboard.module.scss";
import { mockProducts } from "src/services/ProductData";

const Homepage: React.FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <SearchAppBar />

      {mockProducts.map((items) => (<div className={styles.content} key={items.id}>
        <ProductBox
          image={items.image}
          title={items.title}
          price={items.price}
        />
        
      </div>))}
    </div>
  );
};

export default Homepage;
