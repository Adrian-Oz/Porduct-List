"use client";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import Button from "../ui/Button";
import { getDiscountedPrice } from "./helpers";
import Image from "next/image";
import { useState } from "react";

export default function ProductCard({ productData }: { productData: Product }) {
  const { addToCart, isLoading } = useCart();

  const finalPrice = productData.promotion
    ? getDiscountedPrice({
        price: productData.price,
        percentage: productData.promotion.percentage,
      })
    : productData.price;

  const [imageUrl, setImageUrl] = useState(productData.image.url);

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          src={imageUrl}
          alt={productData.image.altText}
          className={styles.image}
          onError={() => {
            setImageUrl("/placeholder_view_vector.png");
          }}
        />
        <Image
          width={96}
          height={48}
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
        <Button
          onClick={() => {
            addToCart(productData.articleNumber);
          }}
        >
          {isLoading === productData.articleNumber
            ? "Adding..."
            : "Add to cart"}
        </Button>
      </div>
    </article>
  );
}
