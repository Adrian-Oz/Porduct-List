import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
export default function ProductList() {
  return (
    <section>
      <div className={styles.grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
