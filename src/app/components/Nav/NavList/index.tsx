import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./navlist.module.css";
import NavListItem from "./NavListItem";

function NavList() {
  return (
    <motion.ul
      className={styles.navContainer}
      variants={{
        open: {
          transition: { staggerChildren: 0.1 },
        },
      }}
    >
      <NavListItem>
        <Link href="/">Home</Link>
      </NavListItem>
      <NavListItem>
        <Link href="/works">Works</Link>
      </NavListItem>
      <NavListItem>
        <Link href="/contact-us">Contact Us</Link>
      </NavListItem>
    </motion.ul>
  );
}

export default NavList;
