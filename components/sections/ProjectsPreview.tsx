"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

// Latest works with images for the preview strip
const PREVIEW_SLUGS = [
  "baeknjang",
  "DIBAMBI",
  "carnabycheesecake",
  "picknpeak",
  "ONYXHIELD",
  "CHAWAN",
];

const previewWorks = PREVIEW_SLUGS.map((slug) =>
  works.find((w) => w.slug === slug)
).filter(Boolean) as (typeof works)[number][];

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

        {/* Horizontal scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-8 px-8 md:-mx-16 md:px-16">
          {previewWorks.map((work, i) => (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="shrink-0 w-[260px] md:w-[300px]"
            >
              <Link href={`/works/${work.slug}`} className="group block">
                <div className="w-full aspect-[4/3] rounded-sm mb-3 overflow-hidden relative bg-neutral-900">
                  <Image
                    src={`/resources/works/${work.folderSlug}/${work.thumbnailFile}`}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <p className="text-xs text-neutral-500 tracking-widest uppercase truncate">
                  {work.subtitle}
                </p>
              </Link>
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
