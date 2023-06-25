"use client";

import styles from "./hometitle.module.css";
import TextTile from "./TextTile";
import { motion } from "framer-motion";

function HomeTitle() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      style={{ x: "-50%", y: "-50%" }}
      className={styles.title_container}
    >
      <div>two truths and a lie</div>
      <TextTile
        text={
          <>
            I build&nbsp;<span className={styles.forg_text}>websites.</span>
          </>
        }
        hidden_text="Yes, I did infact build this one."
      ></TextTile>
      <TextTile
        text={
          <>
            <span className={styles.forg_text}>Regional Manager</span>&nbsp;at
            Dunder Mifflin.
          </>
        }
        hidden_text="Not everyone can be Michael :("
      ></TextTile>
      <TextTile
        text={
          <>
            <span className={styles.forg_text}>Business Intel Engineer</span>
            &nbsp;by Profession.
          </>
        }
        hidden_text="BIE at Amazon with 1 YOE."
      ></TextTile>
    </motion.div>
  );
}

export default HomeTitle;
