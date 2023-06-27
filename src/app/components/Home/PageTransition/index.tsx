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
    <div className="privacy_screen">
      <AnimatePresence mode="wait" initial={false}>
        {children}
        <React.Fragment key={path}>
          <AnimateScreen />
        </React.Fragment>
      </AnimatePresence>
    </div>
  );
}
