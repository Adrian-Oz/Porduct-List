"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: (articleNumber: string) => void;
  cartArticleNumber: string | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);
  const [cartArticleNumber, setCartArticleNumber] = useState<string | null>(
    null,
  );

  async function addToCart(articleNumber: string) {
    if (cartArticleNumber) return;

    setCartArticleNumber(articleNumber);
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      setCartCount((prev) => prev + 1);
    } finally {
      setCartArticleNumber(null);
    }
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart, cartArticleNumber }}>
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
