import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";
export default function ProductList({ data }: { data: Product[] }) {
  return (
    <section>
      <div className={styles.grid}>
        {data.map((product) => {
          return <ProductCard productData={product} />;
        })}
      </div>
    </section>
  );
}
