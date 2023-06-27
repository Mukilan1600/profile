import PageTransition from "./components/Home/PageTransition";
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
          <PageTransition>{children}</PageTransition>
        </Nav>
      </body>
    </html>
  );
}
