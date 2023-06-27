
import Nav from "./components/Nav";
import "./globals.css";
import { Quicksand } from "next/font/google";
import React from "react";

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
            {children}
        </Nav>
      </body>
    </html>
  );
}
