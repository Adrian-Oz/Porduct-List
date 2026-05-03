"use client";
import styles from "./CartBadge.module.css";
import { useCart } from "@/context/CartContext";
export default function CartBadge() {
  const { cartCount } = useCart();

  return <span className={styles.badge}>{cartCount}</span>;
}
