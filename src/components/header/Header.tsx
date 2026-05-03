import styles from "./Header.module.css";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import CartBadge from "./CartBadge";
import { getProductsData } from "@/lib/api";

export default async function Header() {
  const data = await getProductsData();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image
          width={96}
          height={48}
          src={data.logo.url}
          alt={data.logo.altText}
        />
      </Link>

      <button className={styles.cart}>
        <ShoppingCart className={styles.icon} />
        <CartBadge />
      </button>
    </header>
  );
}
