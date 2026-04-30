import styles from "@/components/header/Header.module.css";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Logo</span>
      </Link>

      <button className={styles.cart}>
        <ShoppingCart className={styles.icon} />
        <span className={styles.badge}>0</span>
      </button>
    </header>
  );
}
