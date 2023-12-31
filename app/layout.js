import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pizzon",
  description: "Generated by create next app",
  imageUrl: "/Images/pizza-logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />

          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
