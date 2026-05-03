import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import ProductCardActions from "./ProductCardActions";
import ProductCardImage from "./ProductCardImage";

export default function ProductCard({ productData }: { productData: Product }) {
  return (
    <article className={styles.card}>
      <ProductCardImage
        key={productData.articleNumber}
        brandLogo={productData.brandLogo}
        brandName={productData.brandName}
        image={productData.image}
      />
      <div className={styles.content}>
        <p className={styles.brand}>{productData.brandName}</p>
        <h3>{productData.title}</h3>
        <p className={styles.description}>{productData.description}</p>
      </div>

      <ProductCardActions
        articleNumber={productData.articleNumber}
        price={productData.price}
        promotion={productData.promotion}
      />
    </article>
  );
}
