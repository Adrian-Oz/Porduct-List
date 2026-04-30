import Header from "@/components/header/Header";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Header />
          <main className="container">{children}</main>
        </CartContextProvider>
      </body>
    </html>
  );
}
