import ProductList from "./ProductList";
import { getProductsData } from "@/lib/api";
import styles from "./ProductsContainer.module.css";
export default async function ProductContainer() {
  const data = await getProductsData();

  return (
    <section className={styles.container}>
      <aside className={styles.filters}>Filter placeholder</aside>

      <ProductList data={data.products} />
    </section>
  );
}
