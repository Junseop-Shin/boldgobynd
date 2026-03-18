"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Category = "ALL" | "BRANDING" | "PACKAGE" | "AD·EDITORIAL";

const projects: {
  title: string;
  desc: string;
  category: Category;
  color: string;
}[] = [
  {
    title: "원리사고영어 기반 학원 '백앤장'",
    desc: "BI 개발 및 브랜드 가이드 제작",
    category: "BRANDING",
    color: "#2a2a35",
  },
  {
    title: "홈&라이프스타일 큐레이션 플랫폼 DIBAMBI",
    desc: "BI 개발 및 브랜드 가이드 제작",
    category: "BRANDING",
    color: "#2a3530",
  },
  {
    title: "프리미엄 디저트 브랜드 CARNABY",
    desc: "이벤트 팝업용 바스크치즈케이크 패키지 제작",
    category: "PACKAGE",
    color: "#352a2a",
  },
  {
    title: "토탈 윈도우 필름 전문기업 RAYNO",
    desc: "심볼 개발 및 온·오프라인 ASSET 제작",
    category: "BRANDING",
    color: "#2a2a2a",
  },
  {
    title: "프리미엄 홈&라이프스타일 브랜드 DIBAMBI",
    desc: "퍼퓸 스프레이 패키지 제작",
    category: "PACKAGE",
    color: "#303045",
  },
  {
    title: "더현대 프레젠트 with JACKPOD NEWYORK",
    desc: "스마트워치 스트랩 패키지 제작",
    category: "PACKAGE",
    color: "#2d352d",
  },
  {
    title: "B:DERMATIC X SOOSOOJIN",
    desc: "[LOVE RECIPE] 콜라보 패키지 제작",
    category: "PACKAGE",
    color: "#352d35",
  },
  {
    title: "영상전문프로덕션 PRODUCTION 4:2",
    desc: "로고 및 브랜드가이드 제작",
    category: "BRANDING",
    color: "#252535",
  },
  {
    title: "프리미엄 PPF 브랜드 ONYXHIELD",
    desc: "온·오프라인 ASSET 제작",
    category: "BRANDING",
    color: "#1e2a2a",
  },
  {
    title: "블랜딩찻집 CAFE CHAWAN",
    desc: "차완마음강화티 패키지 제작",
    category: "PACKAGE",
    color: "#2a2820",
  },
  {
    title: "자연주의 스킨케어 브랜드 B:DERMATIC",
    desc: "로고 리뉴얼 및 비건 라인 패키지 제작",
    category: "BRANDING",
    color: "#1e2a1e",
  },
  {
    title: "프리미엄 비건 그릭요거트 브랜드 VEGREEK",
    desc: "그릭요거트 제품 리브랜딩",
    category: "BRANDING",
    color: "#2a2520",
  },
  {
    title: "프리미엄 카워시 서비스 브랜드 AUTONOVA",
    desc: "온·오프라인 ASSET 제작",
    category: "BRANDING",
    color: "#252030",
  },
  {
    title: "프리미엄 펫 라이프스타일 브랜드 PEALTH",
    desc: "펫용 제품 패키지 제작",
    category: "PACKAGE",
    color: "#302020",
  },
  {
    title: "CAFE385",
    desc: "BUSAN CARAMEL 패키지 제작",
    category: "PACKAGE",
    color: "#2a2020",
  },
  {
    title: "수제 츄러스 전문점 시나몬하우스",
    desc: "창업박람회 압축브로셔 제작",
    category: "AD·EDITORIAL",
    color: "#202025",
  },
  {
    title: "프리미엄 PPF 브랜드 ONYXHIELD (2)",
    desc: "온·오프라인 ASSET 제작",
    category: "BRANDING",
    color: "#202020",
  },
  {
    title: "디저트 큐레이션 브랜드 PICK&PEAK",
    desc: "케이크 패키지 제작",
    category: "PACKAGE",
    color: "#302530",
  },
];

const categories: Category[] = ["ALL", "BRANDING", "PACKAGE", "AD·EDITORIAL"];

function ProjectCard({
  title,
  desc,
  color,
  index,
}: {
  title: string;
  desc: string;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
      <div
        className="w-full aspect-[4/3] mb-4 overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-105" />
      </div>
      <p className="text-xs text-neutral-400 tracking-[0.1em] uppercase mb-1">
        {desc}
      </p>
      <h3 className="text-sm font-semibold text-black leading-6">{title}</h3>
    </motion.div>
  );
}

function WorksContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category) || "ALL";
  const [activeCategory, setActiveCategory] =
    useState<Category>(initialCategory);

  const filtered =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
          {categories.map((cat) => (
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
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              desc={project.desc}
              color={project.color}
              index={i}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default function WorksGrid() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-neutral-400">Loading...</div>}>
      <WorksContent />
    </Suspense>
  );
}
