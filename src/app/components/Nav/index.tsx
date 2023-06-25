"use client";

import { useState } from "react";
import NavToggle from "./NavToggle";
import { motion } from "framer-motion";
import NavContainer from "./Container";
import NavList from "./NavList";

function Nav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      style={{
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        backgroundColor: "#111111",
      }}
    >
      <NavToggle toggle={onToggle}></NavToggle>
      <motion.div
        style={{
          height: "100%",
        }}
        variants={{
          closed: {
            width: 0,
            flexBasis: 0,
          },
          open: {
            width: "300px",
            flexBasis: "300px",
          },
        }}
      >
        <NavList />
      </motion.div>
      <NavContainer>{children}</NavContainer>
    </motion.div>
  );
}

export default Nav;
