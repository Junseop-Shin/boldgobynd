import styled from "styled-components";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Responsive } from "../Responsive";
import { works } from "../../assets/works";

const ACCENT = "#d4f5e2";

const services = [
  {
    num: "1",
    title: "Brand Strategy",
    desc: "브랜드의 본질과 방향성을 명확히 설정하는 전략적 기반 설계 단계입니다.",
    items: ["핵심 가치 및 브랜드 철학 정립", "타깃 정의 및 인사이트 도출", "브랜드 컨셉 및 톤앤매너 설정"],
  },
  {
    num: "2",
    title: "Visual Identity",
    desc: "브랜드의 전략적 방향성을 시각적으로 구현하여 일관성 있는 브랜드 언어를 구축합니다.",
    items: ["브랜드 로고 및 심볼 디자인", "전용 서체 및 컬러 시스템 개발", "브랜드 무드에 부합하는 비주얼 키 요소 설계"],
  },
  {
    num: "3",
    title: "Brand System",
    desc: "브랜드의 일관성과 활용도를 높이기 위한 표준화된 가이드와 실제 활용 자산을 제공합니다.",
    items: ["브랜드 가이드라인 제작", "어플리케이션 시스템 개발", "브랜드 에셋 파일 패키지 제공"],
  },
  {
    num: "4",
    title: "Experience Design",
    desc: "다양한 접점에서 고객과 브랜드가 일관되게 연결될 수 있도록, 온·오프라인 전반에 걸쳐 경험을 설계합니다.",
    items: [
      "패키지",
      "디지털 콘텐츠 : 상세페이지, SNS 콘텐츠 등",
      "공간 경험 : 디스플레이, 사인 시스템, 브랜드 팝업/전시 등",
      "인쇄물 및 오프라인 매체 : 브로슈어, 배너, 패널 디자인 등",
    ],
  },
];

const whyItems = [
  { title: "Insight First", desc: "감이 아니라 근거로 설계합니다. 브랜드에 필요한 핵심 질문부터 시작합니다." },
  { title: "Full-Service, In-House", desc: "전략부터 실행까지 한 흐름으로. 따로 맡기지 않아도 됩니다." },
  { title: "Long-Term Partner", desc: "'런칭'이 아닌 '성장'을 목표로 합니다. 우리는 단발성 브랜드가 아닌, 지속가능한 브랜드를 만듭니다." },
];

const jackpodWork = works.find((w) => w.title === "jackpod")!;
const bdermaticWork = works.find((w) => w.title === "bdermatic")!;
const chawanWork = works.find((w) => w.title === "chawan")!;

/* ── Animation variants ── */
const fadeUpVar = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const slideLeftVar = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Anim({
  children,
  variant = "fadeUp",
  delay = 0,
}: {
  children: React.ReactNode;
  variant?: "fadeUp" | "slideLeft";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const vars = variant === "slideLeft" ? slideLeftVar : fadeUpVar;
  const varWithDelay = delay
    ? { ...vars, visible: { ...vars.visible, transition: { ...vars.visible.transition, delay } } }
    : vars;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={varWithDelay}
    >
      {children}
    </motion.div>
  );
}

/* ── Outer layout ── */
const Section = styled.section`
  background: #000;
  color: #fff;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  width: 100%;
`;

const Left = styled.div`
  width: 50%;
  min-width: 0;
  padding-top: 12rem;
`;

const Right = styled.div`
  width: 50%;
  flex-shrink: 0;
`;

const StickyPanel = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 calc((100vw - 1232px) / 2 + 24px) 0 4rem;
  text-align: right;
`;

const RightLabel = styled.p`
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const RightTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 2.5rem;
`;

const RightDesc = styled.p`
  font-size: 1rem;
  color: #888;
  line-height: 2;

  strong {
    color: ${ACCENT};
    font-weight: 600;
  }
`;

/* ── Left blocks: 이미지 백그라운드 + 오버레이 2열 ── */
const Block = styled.div`
  position: relative;
  min-height: 90vh;
  margin-bottom: 12rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* 이미지 백그라운드: 상단 고정 높이만 커버 → 아래는 검정 */
const BlockBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62vh;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.38);
  }
`;

/* BlockOverlay: 세로로 콘텐츠를 하단에 배치 */
const BlockOverlay = styled.div`
  position: relative;
  z-index: 1;
  min-height: inherit;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

/* 2열 그리드: LetsTalk Inner와 동일한 max-width + 마진 */
const BlockContentGrid = styled.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 0 8rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: flex-start;
`;

const BlockLeft = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  padding-top: 1.5rem;
`;

const BlockLabel = styled.p`
  font-size: 0.82rem;
  letter-spacing: 0.07em;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BlockRight = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.7);
  padding-top: 1.5rem;
`;

const BlockHeader = styled.h2`
  font-size: 2.6rem;
  font-weight: 900;
  line-height: 1.35;
  color: #fff;
  margin-bottom: 1.75rem;

  em {
    font-style: normal;
    font-weight: 900;
    color: #fff;
  }
`;

const BlockBody = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.9;

  strong {
    color: ${ACCENT};
    font-weight: 600;
  }
`;

/* ── Service rows ── */
const ServiceList = styled.div`
  margin-top: 3rem;
`;

const ServiceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: flex-start;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.75rem 0;
`;

const ServiceNumTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
  color: #fff;
  letter-spacing: 0;
`;

const ServiceDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.9;
  margin-bottom: 0.75rem;
`;

const ServiceItems = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItemLi = styled.li`
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  display: flex;
  gap: 0.4rem;
`;

/* ── Why BOLD ── */
const WhyItem = styled.div`
  margin-bottom: 1.75rem;
`;

const WhyTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${ACCENT};
`;

const WhyDesc = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.8;
`;

const Dash = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
  margin: 2rem 0 0.75rem;
`;

const Tagline = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  color: #fff;
`;

function DesktopMainSectionInner() {
  return (
    <Section>
      <Inner>
        {/* LEFT */}
        <Left>
          {/* ── Behind the Brand ── */}
          <Block>
            <BlockBg>
              {jackpodWork && (
                <Image src={jackpodWork.mainImage} alt="jackpod" fill style={{ objectFit: "cover" }} />
              )}
            </BlockBg>
            <BlockOverlay>
              <BlockContentGrid>
                <BlockLeft>
                  <Anim>
                    <BlockLabel><span>●</span> Behind the Brand</BlockLabel>
                  </Anim>
                </BlockLeft>
                <BlockRight>
                  <Anim delay={0.05}>
                    <BlockHeader>
                      브랜드,<br />
                      보이는 것 이상의<br />
                      이야기
                    </BlockHeader>
                  </Anim>
                  <Anim delay={0.1}>
                    <BlockBody>
                      우리는 예쁜 브랜드를 만들지 않습니다.<br />
                      작동하는 브랜드, 이해되는 브랜드,<br />
                      그리고 시간이 지나도 매력적인 브랜드를 설계합니다.<br /><br />
                      전략, 언어, 시각까지 브랜드의 모든 지점을 정렬시키는<br />
                      <strong>올인원 브랜드 파트너, 그게 볼드</strong>입니다.
                    </BlockBody>
                  </Anim>
                </BlockRight>
              </BlockContentGrid>
            </BlockOverlay>
          </Block>

          {/* ── Our Process ── */}
          <Block style={{ minHeight: "200vh" }}>
            <BlockBg>
              {bdermaticWork && (
                <Image src={bdermaticWork.mainImage} alt="bdermatic" fill style={{ objectFit: "cover" }} />
              )}
            </BlockBg>
            <BlockOverlay>
              <BlockContentGrid>
                <BlockLeft>
                  <Anim>
                    <BlockLabel><span>●</span> Our Process</BlockLabel>
                  </Anim>
                </BlockLeft>
                <BlockRight>
                  <Anim delay={0.05}>
                    <BlockHeader>
                      브랜드는 한순간의<br />
                      디자인이 아니라<br />
                      <em>오래도록 누적되는</em><br />
                      설계입니다.
                    </BlockHeader>
                  </Anim>
                  <Anim delay={0.1}>
                    <BlockBody>
                      볼드는 브랜드가 고객과 만나는 모든 지점을 고려한 설계를 지향합니다.<br /><br />
                      단순한 결과물이 아닌, 브랜드가 지속적으로 작동하고 일관된 인상을 남길 수 있도록{" "}
                      <strong>전체 디자인 흐름</strong>을 체계적으로 다듬습니다.<br /><br />
                      이 과정은 단발적인 디자인을 넘어{" "}
                      <strong>시간이 지나도 흔들리지 않는 브랜드 경험</strong>을 만드는 데 초점을 맞춥니다.
                    </BlockBody>
                  </Anim>
                  <ServiceList>
                    {services.map((s) => (
                      <ServiceRow key={s.num}>
                        <Anim variant="slideLeft">
                          <ServiceNumTitle>{s.num}.&nbsp;&nbsp;{s.title}</ServiceNumTitle>
                        </Anim>
                        <Anim>
                          <ServiceDesc>{s.desc}</ServiceDesc>
                          <ServiceItems>
                            {s.items.map((item) => (
                              <ServiceItemLi key={item}><span>–</span>&nbsp;{item}</ServiceItemLi>
                            ))}
                          </ServiceItems>
                        </Anim>
                      </ServiceRow>
                    ))}
                  </ServiceList>
                </BlockRight>
              </BlockContentGrid>
            </BlockOverlay>
          </Block>

          {/* ── Why BOLD ── */}
          <Block>
            <BlockBg>
              {chawanWork && (
                <Image src={chawanWork.mainImage} alt="chawan" fill style={{ objectFit: "cover" }} />
              )}
            </BlockBg>
            <BlockOverlay>
              <BlockContentGrid>
                <BlockLeft>
                  <Anim>
                    <BlockLabel><span>●</span> Why BOLD</BlockLabel>
                  </Anim>
                </BlockLeft>
                <BlockRight>
                  <Anim delay={0.05}>
                    <BlockHeader>
                      다르게 일합니다.<br />
                      그래서 결과도<br />
                      다릅니다.
                    </BlockHeader>
                  </Anim>
                  <Anim delay={0.1}>
                    <div>
                      {whyItems.map((item) => (
                        <WhyItem key={item.title}>
                          <WhyTitle>{item.title}</WhyTitle>
                          <WhyDesc>{item.desc}</WhyDesc>
                        </WhyItem>
                      ))}
                      <Dash>–</Dash>
                      <Tagline>We Build Bold Brands.</Tagline>
                    </div>
                  </Anim>
                </BlockRight>
              </BlockContentGrid>
            </BlockOverlay>
          </Block>
        </Left>

        {/* RIGHT — sticky */}
        <Right>
          <StickyPanel>
            <RightLabel>BOLD as Your Partner</RightLabel>
            <RightTitle>
              브랜드의<br />
              가능성을 깨우는<br />
              단단하고<br />
              감각적인 파트너
            </RightTitle>
            <RightDesc>
              브랜드가 걸어갈 방향이 막연하게 느껴질 때,<br />
              <strong>전략과 감각 사이에서 균형을 잡아줄 파트너</strong>가 필요합니다.<br /><br />
              BOLD는 브랜드의 핵심을 함께 정의하고,<br />
              그 매력을 고객에게 선명하게 전하는 방법을 만듭니다.
            </RightDesc>
          </StickyPanel>
        </Right>
      </Inner>
    </Section>
  );
}

export default function DesktopMainSection() {
  return (
    <Responsive only="desktop">
      <DesktopMainSectionInner />
    </Responsive>
  );
}
