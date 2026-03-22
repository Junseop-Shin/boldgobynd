import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { Responsive } from "../Responsive";
import { works } from "../../assets/works";

const whyItems = [
  { title: "Insight First", desc: "감이 아니라 근거로 설계합니다. 브랜드에 필요한 핵심 질문부터 시작합니다." },
  { title: "Full-Service, In-House", desc: "전략부터 실행까지 한 흐름으로. 따로 맡기지 않아도 됩니다." },
  { title: "Long-Term Partner", desc: "'런칭'이 아닌 '성장'을 목표로 합니다. 우리는 단발성 브랜드가 아닌, 지속가능한 브랜드를 만듭니다." },
];

const marqueeItems = [...works].reverse();
const row1 = marqueeItems.slice(0, Math.ceil(marqueeItems.length / 2));
const row2 = marqueeItems.slice(Math.ceil(marqueeItems.length / 2));

const marqueeAnim = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const marqueeReverseAnim = keyframes`
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
`;

const Section = styled.section`
  background: #000;
  color: #fff;
`;

const Content = styled.div`
  padding: 4rem 2rem 3rem;
`;

const HR = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: #555;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1.35;
  margin-bottom: 3rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ItemTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ItemDesc = styled.p`
  font-size: 0.85rem;
  color: #aaa;
  line-height: 1.8;
`;

const MarqueeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 4rem;
  overflow: hidden;
`;

const MarqueeRow = styled.div<{ $reverse?: boolean }>`
  overflow: hidden;
`;

const MarqueeTrack = styled.div<{ $reverse?: boolean }>`
  display: flex;
  gap: 0.5rem;
  width: max-content;
  animation: ${({ $reverse }) => ($reverse ? marqueeReverseAnim : marqueeAnim)} 20s linear infinite;
`;

const MarqueeThumb = styled.div`
  flex-shrink: 0;
  width: 192px;
  height: 128px;
  position: relative;
  overflow: hidden;
`;

function MarqueeRowComp({ items, reverse }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <MarqueeRow $reverse={reverse}>
      <MarqueeTrack $reverse={reverse}>
        {doubled.map((work, i) => (
          <MarqueeThumb key={`${work.title}-${i}`}>
            <Image src={work.thumbnailImage} alt={work.title} fill style={{ objectFit: "cover" }} />
          </MarqueeThumb>
        ))}
      </MarqueeTrack>
    </MarqueeRow>
  );
}

function WhyBoldMobile() {
  return (
    <Section>
      <Content>
        <HR />
        <Label>
          <span>●</span> Why BOLD
        </Label>
        <Title>
          다르게 일합니다.
          <br />
          그래서 <strong>결과도 다릅니다.</strong>
        </Title>
        <Items>
          {whyItems.map((item) => (
            <div key={item.title}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.desc}</ItemDesc>
            </div>
          ))}
        </Items>
      </Content>
      <MarqueeWrapper>
        <MarqueeRowComp items={row1} />
        <MarqueeRowComp items={row2} reverse />
      </MarqueeWrapper>
    </Section>
  );
}

export default function WhyBoldSection() {
  return (
    <Responsive only="mobile">
      <WhyBoldMobile />
    </Responsive>
  );
}
