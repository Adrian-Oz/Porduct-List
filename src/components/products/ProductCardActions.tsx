"use client";
import styles from "./ProductCardActions.module.css";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/product";
import { getDiscountedPrice } from "./helpers";
import Button from "../ui/Button";

export default function ProductCardActions({
  promotion,
  price,
  articleNumber,
}: Pick<Product, "promotion" | "price" | "articleNumber">) {
  const { addToCart, cartArticleNumber } = useCart();

  const finalPrice = promotion
    ? getDiscountedPrice({
        price: price,
        percentage: promotion.percentage,
      })
    : price;

  return (
    <div className={styles.actions}>
      <div className={styles.priceContainer}>
        {promotion ? (
          <>
            <div className={styles.mainPrice}>
              <span className={styles.discounted}>{`${finalPrice}$`}</span>

              <span className={styles.badge}>-{promotion.percentage}%</span>
            </div>
            <span className={styles.oldPrice}>{`${price}$`}</span>
          </>
        ) : (
          <span className={styles.price}>{`${price}$`}</span>
        )}
      </div>

      <Button
        onClick={() => {
          addToCart(articleNumber);
        }}
      >
        {cartArticleNumber === articleNumber ? "Adding..." : "Add to cart"}
      </Button>
    </div>
  );
}
