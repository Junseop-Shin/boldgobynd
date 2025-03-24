import React from "react";
import styled from "styled-components";
import FadeUpAnimation from "./FadeUpAnimation";

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f9fa;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #0070f3;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const AboutCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const AboutCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const AboutCardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <FadeUpAnimation>
          <SectionTitle>About Us</SectionTitle>
        </FadeUpAnimation>
        <AboutGrid>
          <FadeUpAnimation delay={0.2}>
            <AboutCard>
              <AboutCardTitle>Our Mission</AboutCardTitle>
              <AboutCardContent>
                우리는 혁신적인 디자인과 기술로 고객의 비즈니스를 성장시키는
                것을 목표로 합니다.
              </AboutCardContent>
            </AboutCard>
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.4}>
            <AboutCard>
              <AboutCardTitle>Our Vision</AboutCardTitle>
              <AboutCardContent>
                디지털 세상에서 모든 기업이 성공할 수 있도록 돕는 글로벌 리더가
                되는 것입니다.
              </AboutCardContent>
            </AboutCard>
          </FadeUpAnimation>
          <FadeUpAnimation delay={0.6}>
            <AboutCard>
              <AboutCardTitle>Our Values</AboutCardTitle>
              <AboutCardContent>
                혁신, 협력, 고객 중심, 지속 가능성을 우리의 핵심 가치로 삼고
                있습니다.
              </AboutCardContent>
            </AboutCard>
          </FadeUpAnimation>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  );
}
