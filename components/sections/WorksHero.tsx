"use client";

import { motion } from "motion/react";

export default function WorksHero() {
  return (
    <section className="h-screen bg-black flex items-center px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1
            className="text-white leading-[1.1]"
            style={{ fontSize: "clamp(52px, 7.5vw, 120px)" }}
          >
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Think
            </span>
            <span className="font-black"> Bold,</span>
            <br />
            <span
              style={{
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              Create
            </span>
            <span className="font-black"> Beyond.</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
