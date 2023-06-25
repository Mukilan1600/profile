import React from "react";
import { motion } from "framer-motion";

import styles from "./container.module.css";

function NavContainer({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className={styles.container}
      variants={{
        closed: {
          //   height: "100%",
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          borderRadius: 0,
        },
        open: {
          paddingTop: 10,
          paddingRight: 10,
          paddingBottom: 10,
          borderRadius: 12,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default NavContainer;
