import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Button from "@workspace/button";
import { ProductBoxProps } from "./types";
import styles from './ProductBox.module.scss';

const ProductBox: React.FC<ProductBoxProps> = ({ image, title, price, onAddToCart }) => {

  const handleAddtoCart = () => {
    onAddToCart?.(); 
  };

  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.image}
      />

      <CardContent className={styles.content} sx={{ padding: 0 }}>
        <Typography className={styles.title}>{title}</Typography>
        <Typography className={styles.price}>₹{price}</Typography>
        <Button label="Add to Cart" variant="primary" onClick={handleAddtoCart}/>
      </CardContent>

    </Card>
  );
};

export default ProductBox;
