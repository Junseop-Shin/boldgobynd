import styled from "styled-components";
import { Responsive } from "../Responsive";
import ImageCarousel from "../common/ImageCarousel";
import { workDetailFooterImages } from "../../assets/works";
import FadeUpAnimation from "../common/FadeUpAnimation";

const whyItems = [
  { title: "Insight First", desc: "감이 아니라 근거로 설계합니다. 브랜드에 필요한 핵심 질문부터 시작합니다." },
  { title: "Full-Service, In-House", desc: "전략부터 실행까지 한 흐름으로. 따로 맡기지 않아도 됩니다." },
  { title: "Long-Term Partner", desc: "'런칭'이 아닌 '성장'을 목표로 합니다. 우리는 단발성 브랜드가 아닌, 지속가능한 브랜드를 만듭니다." },
];

const Section = styled.section`
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
`;

const Content = styled.div`
  padding: 4rem 2rem 5rem;
`;

const HR = styled.hr`
  border: none;
  border-top: 2px solid #fff;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: #fff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 3rem;
  word-break: keep-all;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #d4f5e2;
`;

const ItemDesc = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.8;
`;

const Dash = styled.p`
  color: #d4f5e2;
  font-size: 1.2rem;
  margin: 2rem 0 0.75rem;
`;

const Tagline = styled.p`
  font-size: 1rem;
  font-weight: 900;
  color: #d4f5e2;
  margin-bottom: 1rem;
`;

function WhyBoldMobile() {
  return (
    <Section>
      <Content>
        <HR />
        <FadeUpAnimation>
          <Label>
            <span>●</span> Why BOLD
          </Label>
          <Title>
            다르게 일합니다.
            <br />
            그래서 <strong>결과도 다릅니다.</strong>
          </Title>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.15}>
          <Items>
            {whyItems.map((item) => (
              <div key={item.title}>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDesc>{item.desc}</ItemDesc>
              </div>
            ))}
          </Items>
          <Dash>–</Dash>
          <Tagline>We Build Bold Brands.</Tagline>
        </FadeUpAnimation>
      </Content>
      <ImageCarousel images={workDetailFooterImages} peek />
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
