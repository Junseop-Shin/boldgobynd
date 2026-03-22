import styled from "styled-components";
import { Responsive } from "../Responsive";
import FadeUpAnimation from "../common/FadeUpAnimation";

const Section = styled.section`
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5rem 2rem 5rem;
`;

const Label = styled.p`
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: #fff;
  margin-bottom: 1.2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1.3;
  text-align: right;
  margin-bottom: 1.2rem;
  color: #fff;
  word-break: keep-all;
`;

const TitleLight = styled.span`
  font-weight: 400;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #fff;
  line-height: 1.9;
  text-align: right;
  letter-spacing: -0.01em;

  strong {
    color: #d4f5e2;
    font-weight: 600;
  }
`;

const RightAlign = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function BoldAsYourPartnerMobile() {
  return (
    <Section>
      <FadeUpAnimation>
        <RightAlign>
          <Label>BOLD as Your Partner</Label>
          <Title>
            <TitleLight>
              브랜드의
              <br />
              가능성을 깨우는
              <br />
            </TitleLight>
            단단하고
            <br />
            감각적인 파트너
          </Title>
        </RightAlign>
      </FadeUpAnimation>
      <FadeUpAnimation delay={0.15}>
        <RightAlign>
          <Desc>
            브랜드가 걸어갈 방향이 막연하게 느껴질 때,
            <br />
            <strong>
              전략과 감각 사이에서
              <br />
              균형을 잡아줄 파트너
            </strong>
            가 필요합니다.
            <br />
            BOLD는 브랜드의 핵심을 함께 정의하고,
            <br />
            그 매력을 고객에게 선명하게 전하는 방법을 만듭니다.
          </Desc>
        </RightAlign>
      </FadeUpAnimation>
    </Section>
  );
}

export default function BoldAsYourPartnerSection() {
  return (
    <Responsive only="mobile">
      <BoldAsYourPartnerMobile />
    </Responsive>
  );
}
