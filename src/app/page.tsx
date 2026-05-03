import ProductList from "@/components/products/ProductList";
import { getProductsData } from "@/lib/api";

export default async function Home() {
  const data = await getProductsData();

  return <ProductList data={data.products} />;
}
