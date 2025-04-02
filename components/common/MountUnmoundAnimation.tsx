import React, { ReactNode } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

interface MountUnmountProps extends HTMLMotionProps<"div"> {
  isVisible: boolean;
  children: ReactNode;
}

export default function MountUnmountAnimation({
  isVisible,
  children,
  ...motionProps
}: MountUnmountProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          {...motionProps}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
