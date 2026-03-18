"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";

const previewProjects = [
  { color: "#2a2a2a", label: "백앤장" },
  { color: "#3a3030", label: "DIBAMBI" },
  { color: "#2a3a30", label: "CARNABY" },
  { color: "#303040", label: "RAYNO" },
  { color: "#3a2a30", label: "ONYXHIELD" },
];

export default function ProjectsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs tracking-[0.2em] flex items-center gap-2 mb-2">
            <span>●</span> Our Projects
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8 md:-mx-16 md:px-16">
          {previewProjects.map((proj, i) => (
            <motion.div
              key={proj.label}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="shrink-0 w-[260px] md:w-[300px]"
            >
              <div
                className="w-full aspect-[4/3] rounded-sm mb-3"
                style={{ backgroundColor: proj.color }}
              />
              <p className="text-xs text-neutral-500 tracking-widest uppercase">
                {proj.label}
              </p>
            </motion.div>
          ))}
          <div className="shrink-0 w-[260px] md:w-[300px] flex items-center justify-center">
            <Link
              href="/works"
              className="text-xs tracking-[0.2em] uppercase text-neutral-400 border border-neutral-700 px-6 py-3 hover:border-white hover:text-white transition-colors"
            >
              View All Works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
