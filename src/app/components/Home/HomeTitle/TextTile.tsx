"use client";

import styles from "./TextTile.module.css";
import { motion } from "framer-motion";

function TextTile({
  text,
  hidden_text,
}: {
  text: React.ReactNode;
  hidden_text: string;
}) {
  return (
    <motion.div
      whileHover="hover"
      style={{ width: "100%", position: "relative", height: "70px" }}
    >
      <motion.div
        variants={{
          hover: { x: "-20%" },
        }}
        className={styles.tile}
      >
        {text}
      </motion.div>
      <motion.div
        className={styles.hidden_tile}
        initial={{
          x: "100%",
        }}
        variants={{
          hover: {
            x: "-15%",
          },
        }}
        transition={{
          ease: "easeOut",
        }}
      >
        {hidden_text}
      </motion.div>
    </motion.div>
  );
}

export default TextTile;
