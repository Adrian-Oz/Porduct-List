import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
export default function ProductList({ data }: { data: Product[] }) {
  return (
    <section className={styles.section}>
      <h2>Products</h2>
      <div className={styles.grid}>
        {data.map((product) => {
          return (
            <ProductCard key={product.articleNumber} productData={product} />
          );
        })}
      </div>
    </section>
  );
}
