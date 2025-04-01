import React, { useRef, ReactNode, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface FadeUpAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  reAnimate?: boolean;
}

export default function FadeUpAnimation({
  children,
  delay = 0,
  duration = 0.8,
  reAnimate = true,
}: FadeUpAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !reAnimate, margin: "-100px 0px" });
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (reAnimate && isInView) {
      setShouldAnimate(true);
    }
  }, [isInView, reAnimate]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
