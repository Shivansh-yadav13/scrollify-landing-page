import { motion } from "motion/react";

export default function Tag({ children }) {
  return (
    <motion.div
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="w-fit mx-auto bg-linear-to-b from-zinc-50 via-zinc-100 to-zinc-100 flex justify-between gap-1 items-center py-1 px-2 rounded-full border border-border text-xs"
    >
      {children}
    </motion.div>
  );
}
