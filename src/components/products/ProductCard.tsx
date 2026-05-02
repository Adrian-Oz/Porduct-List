"use client";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";

function getDiscountedPrice({
  price,
  percentage,
}: {
  price: number;
  percentage: number;
}) {
  return (price * (1 - percentage / 100)).toFixed(2);
}

export default function ProductCard({ productData }: { productData: Product }) {
  const { addToCart } = useCart();

  const finalPrice = productData.promotion
    ? getDiscountedPrice({
        price: productData.price,
        percentage: productData.promotion.percentage,
      })
    : productData.price;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={productData.image.url}
          alt={productData.image.altText}
          className={styles.image}
        />
        <img
          src={productData.brandLogo}
          alt={productData.brandName}
          className={styles.brandLogo}
        />
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>{productData.brandName}</p>
        <h3>{productData.title}</h3>
        <p className={styles.description}>{productData.description}</p>

        <div className={styles.price}>
          {productData.promotion ? (
            <>
              <span className={styles.discounted}>{`${finalPrice}$`}</span>

              <span className={styles.oldPrice}>{`${productData.price}$`}</span>

              <span className={styles.badge}>
                -{productData.promotion.percentage}%
              </span>
            </>
          ) : (
            <span>{`${productData.price}$`}</span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </article>
  );
}
