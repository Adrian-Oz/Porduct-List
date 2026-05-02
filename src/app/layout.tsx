import Header from "@/components/header/Header";
import "./globals.css";
import { CartContextProvider } from "@/context/CartContext";
import { getLogo } from "@/lib/api";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getLogo();
  // console.log(response);
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Header logo={response} />
          <main className="container">{children}</main>
        </CartContextProvider>
      </body>
    </html>
  );
}
