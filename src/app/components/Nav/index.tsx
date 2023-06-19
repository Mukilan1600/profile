"use client";

import { useState } from "react";
import NavToggle from "./NavToggle";
import { motion } from "framer-motion";

function Nav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{ height: "100vh" }}
    >
      <NavToggle toggle={onToggle}></NavToggle>
      {children}
    </motion.div>
  );
}

export default Nav;
