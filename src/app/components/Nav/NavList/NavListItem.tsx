import { motion } from "framer-motion";

function NavListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.li
      variants={{
        closed: {
          opacity: 0,
          y: 10,
        },
        open: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.li>
  );
}

export default NavListItem;
