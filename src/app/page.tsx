import ProductList from "@/components/product/ProductList";
import { getProducts } from "@/lib/api";
export default async function Home() {
  const products = await getProducts();

  return <ProductList data={products} />;
}
