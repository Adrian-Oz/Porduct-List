"use client";
import styles from "@/components/header/Header.module.css";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span>Logo</span>
      </Link>

      <button className={styles.cart}>
        <ShoppingCart className={styles.icon} />
        <span className={styles.badge}>{cartCount}</span>
      </button>
    </header>
  );
}
