import { motion } from "framer-motion";
// import Link from "next/link";
import { Link } from "react-router-dom";
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
        <Link to="/">Home</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/works">Works</Link>
      </NavListItem>
      <NavListItem>
        <Link to="/contact-us">Contact Us</Link>
      </NavListItem>
    </motion.ul>
  );
}

export default NavList;
