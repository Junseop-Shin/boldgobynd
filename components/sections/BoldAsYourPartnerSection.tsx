import styled from "styled-components";
import { Responsive } from "../Responsive";

const Section = styled.section`
  background: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5rem 2rem;
`;

const Label = styled.p`
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: #555;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.35;
  text-align: right;
  margin-bottom: 2.5rem;
`;

const Desc = styled.p`
  font-size: 0.875rem;
  color: #aaa;
  line-height: 2;
  text-align: right;

  strong {
    color: #ccc;
  }
`;

function BoldAsYourPartnerMobile() {
  return (
    <Section>
      <Label>BOLD as Your Partner</Label>
      <Title>
        브랜드의
        <br />
        가능성을 깨우는
        <br />
        단단하고
        <br />
        감각적인 파트너
      </Title>
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
