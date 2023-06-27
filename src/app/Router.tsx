"use client";

import { useRoutes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Works from "./works/page";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function App() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/works",
      element: <Works />,
    },
  ]);

  const location = useLocation();

  if (!routeElements) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(routeElements, { key: location.pathname })}
    </AnimatePresence>
  );
}
