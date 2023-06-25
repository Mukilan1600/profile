import Nav from "./components/Nav";
import "./globals.css";
import { Quicksand } from "next/font/google";
import ClientBrowserRouter from "./components/ClientBrowserRouter";
import Router from "./Router";
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
        <ClientBrowserRouter>
          <Nav>
            <Router />
          </Nav>
        </ClientBrowserRouter>
      </body>
    </html>
  );
}
