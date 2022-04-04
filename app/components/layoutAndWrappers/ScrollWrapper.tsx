import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: JSX.Element;
};

function ScrollWrapper({ children }: Props) {
  const pitchVariants = {
    offscreen: {
      //revert to .5 to restore animation
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
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 1 }}
    >
      <motion.div variants={pitchVariants} whileHover={{scale: 1.2}}>{children}</motion.div>
    </motion.div>
  );
}

export default ScrollWrapper;
