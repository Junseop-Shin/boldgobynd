import styled from "styled-components";
import { Responsive } from "../Responsive";
import FadeUpAnimation from "../common/FadeUpAnimation";

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

const Section = styled.section`
  background: #d4f5e2;
  color: #000;
`;

const Intro = styled.div`
  padding: 2rem 2rem 1.5rem;
`;

const HR = styled.hr`
  border: none;
  border-top: 2px solid #000;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const Body = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  padding-left: 1rem;
  margin-bottom: 1rem;

  strong {
    font-weight: 700;
  }
`;

const Dash = styled.p`
  font-size: 1.2rem;
  padding-left: 1rem;
  margin: 1.5rem 0;
`;

const Bold = styled.p`
  font-size: 1rem;
  font-weight: 700;
  padding-left: 1rem;
  line-height: 1.9;
`;

const ServiceList = styled.div`
  padding: 0 2rem 5rem;
  border-top: 2px solid #000;
`;

const ServiceItem = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  display: flex;
  gap: 1rem;

  &:first-child {
    border-top: none;
  }
`;

const ServiceNum = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #888;
  padding-top: 0.25rem;
  min-width: 1rem;
  flex-shrink: 0;
`;

const ServiceContent = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ServiceDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 0.75rem;
`;

const ServiceItems = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItemLi = styled.li`
  font-size: 0.85rem;
  color: #555;
  line-height: 1.8;
  display: flex;
  gap: 0.5rem;
`;

function OurProcessMobile() {
  return (
    <Section>
      <Intro>
        <HR />
        <FadeUpAnimation>
          <Label>
            <span>●</span> Our Process
          </Label>
          <Title>
            브랜드는
            <br />
            한순간의 디자인이 아니라
            <br />
            <strong>오래도록 누적되는 설계</strong>입니다.
          </Title>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.15}>
          <Body>
            볼드는 브랜드가 고객과 만나는 모든 지점을 고려한 설계를 지향합니다.
            단순한 결과물이 아닌, 브랜드가 지속적으로 작동하고 일관된 인상을 남길 수 있도록{" "}
            <strong>전체 디자인 흐름</strong>을 체계적으로 다듬습니다.
          </Body>
          <Body>
            이 과정은 단발적인 디자인을 넘어{" "}
            <strong>시간이 지나도 흔들리지 않는 브랜드 경험</strong>을 만드는 데 초점을 맞춥니다.
          </Body>
          <Dash>–</Dash>
          <Bold>우리는 브랜드의 &apos;존재 방식&apos;을 함께 만듭니다.</Bold>
        </FadeUpAnimation>
      </Intro>
      <FadeUpAnimation>
        <ServiceList>
          {services.map((s) => (
            <ServiceItem key={s.num}>
              <ServiceNum>{s.num}</ServiceNum>
              <ServiceContent>
                <ServiceTitle>{s.title}</ServiceTitle>
                <ServiceDesc>{s.desc}</ServiceDesc>
                <ServiceItems>
                  {s.items.map((item) => (
                    <ServiceItemLi key={item}>
                      <span>–</span>
                      {item}
                    </ServiceItemLi>
                  ))}
                </ServiceItems>
              </ServiceContent>
            </ServiceItem>
          ))}
        </ServiceList>
      </FadeUpAnimation>
    </Section>
  );
}

export default function OurProcessSection() {
  return (
    <Responsive only="mobile">
      <OurProcessMobile />
    </Responsive>
  );
}
