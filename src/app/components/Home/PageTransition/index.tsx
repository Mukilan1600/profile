"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import React from "react";
import AnimateScreen from "./AnimateScreen";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <React.Fragment key={path}>
        {children}
        <AnimateScreen />
      </React.Fragment>
    </AnimatePresence>
  );
}
