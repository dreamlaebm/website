import type { Metadata } from "next";
//aqui
import { Inter, Poppins, Prosto_One } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import localFont from "@next/font/local";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laebm",
  description: "Wake up to your dreams!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#11141D]`}>{children}</body>
    </html>
  );
}
