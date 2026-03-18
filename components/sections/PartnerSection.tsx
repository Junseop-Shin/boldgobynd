"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Brand Strategy",
    desc: "브랜드의 본질과 방향성을 명확히 설정하는 전략적 기반 설계 단계입니다.",
    items: [
      "핵심 가치 및 브랜드 철학 정립",
      "타깃 정의 및 인사이트 도출",
      "브랜드 컨셉 및 톤앤매너 설정",
    ],
  },
  {
    num: "02",
    title: "Visual Identity",
    desc: "브랜드의 전략적 방향성을 시각적으로 구현하여 일관성 있는 브랜드 언어를 구축합니다.",
    items: [
      "브랜드 로고 및 심볼 디자인",
      "전용 서체 및 컬러 시스템 개발",
      "브랜드 무드에 부합하는 비주얼 키 요소(그래픽 모티프, 패턴 등) 설계",
    ],
  },
  {
    num: "03",
    title: "Brand System",
    desc: "브랜드의 일관성과 활용도를 높이기 위한 표준화된 가이드와 실제 활용 자산을 제공합니다.",
    items: [
      "브랜드 가이드라인 제작",
      "명함, 봉투 등 기본 인쇄물 적용",
      "디지털/오프라인 활용 예시 제공",
    ],
  },
  {
    num: "04",
    title: "Experience Design",
    desc: "다양한 접점에서 고객에게 전달될 브랜드 경험을 설계합니다.",
    items: [
      "패키지 디자인",
      "광고·에디토리얼 디자인",
      "공간·환경 비주얼 제안",
    ],
  },
];

// Product images for floating display (package works with good product shots)
const FLOATING_IMAGES = [
  {
    src: "/resources/works/cafe385/thumbnail.webp",
    alt: "CAFE385 패키지",
    rotate: "-6deg",
    position: "absolute top-0 left-0 w-44 h-56",
  },
  {
    src: "/resources/works/chawan/thumbnail.webp",
    alt: "CAFE CHAWAN 패키지",
    rotate: "3deg",
    position: "absolute top-8 left-20 w-36 h-48",
  },
  {
    src: "/resources/works/pealth/thumbnail.webp",
    alt: "PEALTH 패키지",
    rotate: "8deg",
    position: "absolute bottom-0 right-0 w-48 h-32",
  },
];

function FadeInView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function PartnerSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* LEFT column — scrolling content */}
          <div className="flex-1 order-2 md:order-1">
            {/* Floating product images */}
            <div className="min-h-screen flex items-center justify-center px-8 md:px-16 py-24">
              <div className="relative w-full max-w-md h-80">
                {FLOATING_IMAGES.map((img) => (
                  <div
                    key={img.src}
                    className={`${img.position} shadow-2xl overflow-hidden`}
                    style={{ transform: `rotate(${img.rotate})` }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Behind the Brand */}
            <div
              className="px-8 md:px-16 py-24 md:py-32"
              style={{ backgroundColor: "#d4f5e2" }}
            >
              <FadeInView>
                <p className="text-xs tracking-[0.2em] text-black mb-8 flex items-center gap-2">
                  <span className="text-black">●</span> Behind the Brand
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-black leading-[1.3] mb-8">
                  브랜드,
                  <br />
                  보이는 것 이상의 이야기
                </h2>
                <p className="text-sm md:text-base text-black leading-8 max-w-md">
                  우리는 예쁜 브랜드를 만들지 않습니다. 작동하는 브랜드,
                  이해되는 브랜드, 그리고 시간이 지나도 매력적인 브랜드를
                  설계합니다. 전략, 언어, 시각까지 브랜드의 모든 지점을 정밀하는
                  올인원 브랜드 파트너, 그게 볼드입니다.
                </p>
              </FadeInView>
            </div>

            {/* Our Process */}
            <div className="bg-black px-8 md:px-16 py-24 md:py-32">
              <FadeInView>
                <p className="text-xs tracking-[0.2em] text-neutral-500 mb-8 flex items-center gap-2">
                  <span>●</span> Our Process
                </p>
                <p className="text-base md:text-lg font-bold leading-8 text-white mb-3 max-w-lg">
                  시간이 지나도 흔들리지 않는{" "}
                  <strong>브랜드 경험</strong>을 만드는 데 초점을 맞춥니다.
                </p>
                <p className="text-sm text-neutral-400 mb-16">
                  우리는 브랜드의 &apos;존재 방식&apos;을 함께 만듭니다.
                </p>
              </FadeInView>

              <div className="space-y-0">
                {services.map((service, i) => (
                  <FadeInView key={service.num} delay={i * 0.1}>
                    <div className="border-t border-neutral-700 py-10">
                      <div className="flex items-start gap-6 mb-4">
                        <span className="text-xs text-neutral-500 pt-1 font-mono">
                          {service.num}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-sm text-neutral-400 leading-7 mb-4">
                            {service.desc}
                          </p>
                          <ul className="space-y-1">
                            {service.items.map((item) => (
                              <li
                                key={item}
                                className="text-xs text-neutral-500 flex items-start gap-2"
                              >
                                <span className="mt-1.5 shrink-0">—</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>

            {/* Why BOLD */}
            <div
              className="px-8 md:px-16 py-24 md:py-32"
              style={{ backgroundColor: "#f5f0e8" }}
            >
              <FadeInView>
                <p className="text-xs tracking-[0.2em] text-neutral-500 mb-8 flex items-center gap-2">
                  <span className="text-neutral-400">●</span> Why BOLD
                </p>
                <h2 className="text-3xl md:text-4xl font-black text-black leading-[1.3] mb-8">
                  단순한 디자인이 아닌,
                  <br />
                  브랜드의 미래를 함께 씁니다
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                  {[
                    {
                      num: "01",
                      title: "전략 기반 디자인",
                      desc: "감각만이 아닌, 데이터와 전략을 토대로 브랜드를 설계합니다.",
                    },
                    {
                      num: "02",
                      title: "일관된 브랜드 언어",
                      desc: "로고부터 패키지, 광고까지 하나의 목소리로 말하는 브랜드를 만듭니다.",
                    },
                    {
                      num: "03",
                      title: "밀도 있는 협업",
                      desc: "클라이언트의 비즈니스를 깊이 이해하고, 함께 브랜드를 만들어 갑니다.",
                    },
                    {
                      num: "04",
                      title: "지속 가능한 결과물",
                      desc: "트렌드를 쫒지 않고, 오래가는 브랜드 자산을 설계합니다.",
                    },
                  ].map((item) => (
                    <div key={item.num}>
                      <span className="text-xs font-mono text-neutral-400 mb-2 block">
                        {item.num}
                      </span>
                      <h3 className="text-base font-bold text-black mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>

          {/* RIGHT column — sticky */}
          <div className="w-full md:w-[420px] lg:w-[480px] order-1 md:order-2 shrink-0">
            <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center px-8 md:px-12 py-16 md:py-0">
              <FadeInView>
                <p className="text-xs tracking-[0.2em] text-neutral-500 mb-10 md:text-right">
                  BOLD as Your Partner
                </p>
                <h2 className="text-3xl lg:text-4xl leading-[1.35] text-white md:text-right">
                  브랜드의
                  <br />
                  가능성을 깨우는
                  <br />
                  <strong className="font-black">단단하고</strong>
                  <br />
                  <strong className="font-black">감각적인 파트너</strong>
                </h2>
                <p className="text-xs text-neutral-500 leading-7 mt-10 md:text-right">
                  브랜드가 걸어갈 방향이 막연하게 느껴질 때,
                  <br />
                  <strong className="text-neutral-400">
                    전략과 감각 사이에서 균형을 잡아줄 파트너
                  </strong>
                  가 필요합니다.
                  <br />
                  BOLD는 브랜드의 핵심을 함께 정의하고,
                  <br />그 매력을 고객에게 선명하게 전하는 방법을 만듭니다.
                </p>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
