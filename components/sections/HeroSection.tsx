"use client";

import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center"
      >
        <h1
          className="leading-[1.1] tracking-tight"
          style={{
            fontSize: "clamp(52px, 8vw, 120px)",
          }}
        >
          <span className="font-black">Lead</span>
          <span
            className="font-script text-neutral-500 mx-3 md:mx-5"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            {" "}
            with{" "}
          </span>
          <span className="font-black">Bold.</span>
        </h1>
      </motion.div>
    </section>
  );
}
