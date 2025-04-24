import { motion } from "motion/react";

export default function Button({ className, onClick, children }) {
  return (
    <motion.button
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.1,
      }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
