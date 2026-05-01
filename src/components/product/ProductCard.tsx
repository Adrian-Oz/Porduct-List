"use client";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/Product";
export default function ProductCard({ productData }: { productData: Product }) {
  const { addToCart } = useCart();
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={productData.image.url} alt={productData.image.altText} />
        {/* badge later */}
      </div>

      <div className={styles.content}>
        <h3>{productData.title}</h3>
        <p className={styles.description}>{productData.description}</p>

        <div className={styles.price}>
          <span>{`$${productData.price}`}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </article>
  );
}
