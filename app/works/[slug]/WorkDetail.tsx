"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { type Work } from "@/data/works";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function WorkDetail({ work }: { work: Work }) {
  const thumbSrc = `/resources/works/${work.folderSlug}/${work.thumbnailFile}`;
  const galleryImages = Array.from({ length: work.imageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/resources/works/${work.folderSlug}/${num}.${work.imageExt}`;
  });

  return (
    <>
      <Header />
      <main className="pt-20 bg-white min-h-screen">
        {/* Hero image — full width */}
        <div className="w-full aspect-[16/7] relative bg-neutral-100 overflow-hidden">
          <Image
            src={thumbSrc}
            alt={work.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Content: sticky two-column layout */}
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row">
          {/* LEFT — gallery (scrolls) */}
          <div className="flex-1 order-2 md:order-1 px-8 md:px-16 py-16 space-y-6">
            {galleryImages.map((src, i) => (
              <FadeIn key={src} delay={i * 0.05}>
                <div className="w-full relative bg-neutral-100 overflow-hidden">
                  <Image
                    src={src}
                    alt={`${work.title} ${i + 1}`}
                    width={1920}
                    height={1227}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 65vw"
                  />
                </div>
              </FadeIn>
            ))}

            {galleryImages.length === 0 && (
              <div className="py-32 text-center text-neutral-300 text-sm">
                이미지 준비 중
              </div>
            )}
          </div>

          {/* RIGHT — sticky info */}
          <div className="w-full md:w-[360px] lg:w-[420px] order-1 md:order-2 shrink-0">
            <div className="md:sticky md:top-20 px-8 md:px-12 py-16 md:py-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* Back */}
                <Link
                  href="/works"
                  className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-neutral-400 hover:text-black transition-colors mb-10"
                >
                  ← Works
                </Link>

                {/* Title */}
                <h1 className="text-xl md:text-2xl font-black text-black leading-[1.4] mb-3">
                  {work.title}
                </h1>
                <p className="text-sm text-neutral-500 leading-7 mb-8">
                  {work.subtitle}
                </p>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {work.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-[11px] tracking-[0.1em] uppercase border border-neutral-200 text-neutral-500"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="space-y-4 border-t border-neutral-100 pt-8">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] tracking-[0.12em] uppercase text-neutral-400">
                      Client
                    </span>
                    <span className="text-sm font-semibold text-black">
                      {work.client}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] tracking-[0.12em] uppercase text-neutral-400">
                      Year
                    </span>
                    <span className="text-sm font-semibold text-black">
                      {work.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
