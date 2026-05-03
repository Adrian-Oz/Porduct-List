"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: (articleNumber: string) => void;
  articleNumber: string | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);
  const [articleNumber, setArticleNumber] = useState<string | null>(null);

  async function addToCart(articleNumber: string) {
    if (articleNumber) return;

    setArticleNumber(articleNumber);
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      setCartCount((prev) => prev + 1);
    } finally {
      setArticleNumber(null);
    }
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart, articleNumber }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
