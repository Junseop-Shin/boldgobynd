"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { works, FILTER_CATEGORIES, type FilterCategory } from "@/data/works";

function ProjectCard({
  work,
  index,
}: {
  work: (typeof works)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const thumbSrc = `/resources/works/${work.folderSlug}/${work.thumbnailFile}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer"
    >
      <Link href={`/works/${work.slug}`}>
        <div className="w-full aspect-[4/3] mb-4 overflow-hidden bg-neutral-100 relative">
          <Image
            src={thumbSrc}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {work.categories.map((cat) => (
            <span
              key={cat}
              className="text-[10px] tracking-[0.1em] text-neutral-400 uppercase"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-400 tracking-[0.05em] mb-1">
          {work.subtitle}
        </p>
        <h3 className="text-sm font-semibold text-black leading-6">
          {work.title}
        </h3>
      </Link>
    </motion.div>
  );
}

function WorksContent() {
  const searchParams = useSearchParams();
  const initialCategory =
    (searchParams.get("category") as FilterCategory) || "ALL";
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>(initialCategory);

  const filtered =
    activeCategory === "ALL"
      ? works
      : works.filter((w) =>
          w.categories.some((c) => c === activeCategory)
        );

  return (
    <>
      {/* Description */}
      <section className="bg-white px-8 md:px-16 py-20 md:py-28 max-w-[1400px] mx-auto">
        <div className="max-w-2xl">
          <p className="text-sm md:text-base leading-8 text-neutral-700 mb-6">
            볼드는 브랜드가 가장 자신답게 보일 수 있는 방법을, 다양한 맥락
            속에서 만들어 갑니다.
          </p>
          <p className="text-sm md:text-base leading-8 text-neutral-500 mb-6">
            우리가 만든 브랜드는 단순히 &apos;보여지는 것&apos;이 아니라, 그
            안에 담긴 이야기와 가치가 진심으로 전달되도록 설계된 결과입니다.
          </p>
          <p className="text-sm md:text-base leading-8 text-neutral-500">
            지금까지 우리가 함께 만든 다양한 브랜드의 여정을 확인해보세요.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white px-8 md:px-16 border-t border-neutral-100 max-w-[1400px] mx-auto">
        <div className="flex gap-0 overflow-x-auto">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-6 py-4 text-xs tracking-[0.15em] uppercase font-semibold border-b-2 transition-colors ${
                activeCategory === cat
                  ? "border-black text-black"
                  : "border-transparent text-neutral-400 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white px-8 md:px-16 py-12 md:py-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {filtered.map((work, i) => (
            <ProjectCard key={work.slug} work={work} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}

export default function WorksGrid() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-neutral-400">
          Loading...
        </div>
      }
    >
      <WorksContent />
    </Suspense>
  );
}
