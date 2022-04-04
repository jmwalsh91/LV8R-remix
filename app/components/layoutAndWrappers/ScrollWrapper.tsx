import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: any;
};

function ScrollWrapper({ children }: Props) {
  const pitchVariants = {
    offscreen: {
      opacity: 1,
    },
    onscreen: {
      opacity: 1,
      transition: {
        bounce: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="onscreen"
      whileInView="offscreen"
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div variants={pitchVariants}>{children}</motion.div>
    </motion.div>
  );
}

export default ScrollWrapper;
