import styled from "styled-components";
import { Responsive } from "../Responsive";
import FadeUpAnimation from "../common/FadeUpAnimation";

const Section = styled.section`
  background: #d4f5e2;
  color: #000;
  padding: 4rem 2rem 5rem;
`;

const HR = styled.hr`
  border: none;
  border-top: 2px solid #000;
  margin-bottom: 2rem;
`;

const Label = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 2.5rem;
  word-break: keep-all;
`;

const Body = styled.p`
  font-size: 1rem;
  line-height: 1.9;
  padding-left: 1rem;

  strong {
    font-weight: 700;
  }
`;

function BehindTheBrandMobile() {
  return (
    <Section>
      <HR />
      <FadeUpAnimation>
        <Label>
          <span>●</span> Behind the Brand
        </Label>
        <Title>
          브랜드,
          <br />
          보이는 것 이상의 이야기
        </Title>
      </FadeUpAnimation>
      <FadeUpAnimation delay={0.15}>
        <Body>
          우리는 예쁜 브랜드를 만들지 않습니다.
          <br />
          작동하는 브랜드, 이해되는 브랜드,
          <br />
          그리고 시간이 지나도
          <br />
          매력적인 브랜드를 설계합니다.
          <br />
          전략, 언어, 시각까지
          <br />
          브랜드의 모든 지점을 정렬시키는
          <br />
          <strong>올인원 브랜드 파트너, 그게 볼드</strong>입니다.
        </Body>
      </FadeUpAnimation>
    </Section>
  );
}

export default function BehindTheBrandSection() {
  return (
    <Responsive only="mobile">
      <BehindTheBrandMobile />
    </Responsive>
  );
}
