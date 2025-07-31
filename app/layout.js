import "@/app/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YC Directory",
  description: "Discover YC Startups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
} 