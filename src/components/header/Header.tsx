"use client";
import styles from "@/components/header/Header.module.css";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Image as ImageType } from "@/types/product";
import Image from "next/image";

export default function Header({ logo }: { logo: ImageType }) {
  const { cartCount } = useCart();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image width={96} height={48} src={logo.url} alt={logo.altText} />
      </Link>

      <button className={styles.cart}>
        <ShoppingCart className={styles.icon} />
        <span className={styles.badge}>{cartCount}</span>
      </button>
    </header>
  );
}
