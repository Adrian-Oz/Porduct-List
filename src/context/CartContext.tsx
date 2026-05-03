"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: (articleNumber: string) => void;
  isLoading: string | null;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  // function addToCart() {
  //   setCartCount((prev) => prev + 1);
  // }

  async function addToCart(articleNumber: string) {
    if (isLoading) return;

    setIsLoading(articleNumber);
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      setCartCount((prev) => prev + 1);
    } finally {
      setIsLoading(null);
    }
  }

  return (
    <CartContext.Provider value={{ cartCount, addToCart, isLoading }}>
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
