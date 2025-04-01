import React, { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeUpAnimationProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeUpAnimation({
  children,
  delay = 0,
}: FadeUpAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
