import Header from "@/components/header/Header";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";
import { getProductsData } from "@/lib/api";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getProductsData();
  // console.log(response);
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Header logo={data.logo} />
          <main className="container">{children}</main>
        </CartContextProvider>
      </body>
    </html>
  );
}
