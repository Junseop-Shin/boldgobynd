import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MountUnmountProps {
  isVisible: boolean;
  children: ReactNode;
}

export default function MountUnmountAnimation({
  isVisible,
  children,
}: MountUnmountProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
