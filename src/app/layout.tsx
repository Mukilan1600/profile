"use client";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav";
import "./globals.css";
import { Quicksand } from "next/font/google";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Mukilan",
  description: "Portfolio of the one and only",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Nav>
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </Nav>
      </body>
    </html>
  );
}
