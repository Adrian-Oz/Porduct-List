"use client";
import styles from "./ProductCardImage.module.css";
import { Product } from "@/types/product";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductCardImage({
  image,
  brandLogo,
  brandName,
}: Pick<Product, "image" | "brandLogo" | "brandName">) {
  const [hasError, setHasError] = useState(false);

  let src = hasError ? "/placeholder_view_vector.png" : image.url;
  return (
    <div className={styles.imageContainer}>
      <Image
        fill
        sizes="(max-width: 768px) 100vw, 25vw"
        src={src}
        alt={image.altText}
        className={styles.image}
        onError={() => {
          setHasError(true);
        }}
      />
      <Image
        width={96}
        height={48}
        src={brandLogo}
        alt={brandName}
        className={styles.brandLogo}
      />
    </div>
  );
}
